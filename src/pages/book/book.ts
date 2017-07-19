import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, Events, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { SettingsPage } from '../settings/settings';

declare var ePub: any;

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  book: any;
  currentPage: number = 1;
  totalPages: any; // TODO should be number
  pageTitle: string;

  showToolbars: boolean = true;
  bgColor: any;
  toolbarColor: string = 'light';

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public popoverCtrl: PopoverController,
    public events: Events,
    public navParams: NavParams,
  ) {
    let book = this.navParams.get('book');

    this.platform.ready().then(() => {
      // load book
      this.book = ePub(book.file);

      this._updateTotalPages();

      // load toc and then update pagetitle
      this.book.getToc().then(toc => {
        this._updatePageTitle();
      });

      // if page changes
      this.book.on('book:pageChanged', (location) => {
        console.log('on book:pageChanged', location);
        this._updateCurrentPage();
        this._updatePageTitle();
      });

      // subscribe to events coming from other pages
      this._subscribeToEvents();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');

    // render book
    this.book.renderTo("book"); // TODO We should work with ready somehow here I think
  }

  _subscribeToEvents() {
    console.log('subscribe to events');

    // toc: go to selected chapter
    this.events.subscribe('select:toc', (content) => {
      this.book.goto(content.href);
    });

    // settings: change background color
    this.events.subscribe('select:background-color', (bgColor) => {
      console.log('select:background-color', bgColor);
      this.book.setStyle("background-color", bgColor);
      this.bgColor = bgColor;
      // adapt toolbar color to background color
      if (bgColor == 'rgb(255, 255, 255)' || bgColor == 'rgb(249, 241, 228)') { // TODO don't hardcode color values, use some metadata
        this.toolbarColor = 'light';
      }
      else {
        this.toolbarColor = 'dark';
      }
    });

    // settings: change color
    this.events.subscribe('select:color', (color) => {
      console.log('select:color', color);
      this.book.setStyle("color", color);
    });

    // settings: change font
    this.events.subscribe('select:font-family', (family) => {
      console.log('select:font-family', family);
      this.book.setStyle("font-family", family);
      this._updateTotalPages();
    });

    // settings: change font size
    this.events.subscribe('select:font-size', (size) => {
      console.log('select:font-size', size);
      this.book.setStyle("font-size", size);
      this._updateTotalPages();
    });

  }

  _updateCurrentPage() {
    console.log('_updateCurrentPage');
    // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers (bottom)
    let currentLocation = this.book.getCurrentLocationCfi();
    let page = this.book.pagination.pageFromCfi(currentLocation)
    console.log('_updateCurrentPage location =', currentLocation, 'page =', page);
    this.currentPage = page;
  }

  _updateTotalPages() {
    console.log('_updateTotalPages');
    //TODO: cancel prior pagination promise
    // TODO Triggers "download" of ALL pages for unpacked books. Really needed? Alternative?
    // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers
    this.book.generatePagination().then(() => {
      let totalPages = this.book.pagination.totalPages;
      console.log('_updateTotalPages totalPages = ', totalPages);
      this.totalPages = `of ${totalPages}`; // TODO where is this.totalPages actually used?
    }).catch(error => {
      console.log('_updateTotalPages error = ', error);
    });
  }

  _updatePageTitle() {
    console.log('_updatePageTitle');
    let bookTitle = this.book.metadata.bookTitle;
    let pageTitle = bookTitle; // default to book title
    if (this.book.toc) {
      // Use chapter name
      let chapter = this.book.toc.filter(obj => obj.href == this.book.currentChapter.href)[0]; // TODO What does this code do?
      pageTitle = chapter ? chapter.label : bookTitle; // fallback to book title again
    }
    console.log('_updatePageTitle title =', pageTitle);
    this.pageTitle = pageTitle;
  }

  // Navigation

  prev() {
    console.log('prev');
    if (this.currentPage == 2) { // TODO Why this special case here?
      this.book.gotoPage(1);
    } else {
      this.book.prevPage();
    }
  }

  next() {
    console.log('next');
    this.book.nextPage();
  }

  toc(ev) {
    console.log('toc');
    let popover = this.popoverCtrl.create(TocPage, {
      toc: this.book.toc
    });
    popover.present({ ev });
  }

  settings(ev) {
    console.log('settings');
    let popover = this.popoverCtrl.create(SettingsPage, {
      backgroundColor: this.book.settings.styles['background-color'], // TODO: Color is not needed here?
      fontFamily: this.book.settings.styles['font-family'],
      fontSize: this.book.settings.styles['font-size'],
    });
    popover.present({ ev });
  }


  // Touchlayer

  toggleToolbars() {
    console.log('toggleToolbars');
    this.showToolbars = !this.showToolbars;
  }

  changePage(event) {
    console.log('changePage', event);
    if (event.velocityX < 0) { // TODO Best way to do this?
      this.next();
    }
    else {
      this.prev();
    }
  }

}
