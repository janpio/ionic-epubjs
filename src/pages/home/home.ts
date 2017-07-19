import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, Events } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { SettingsPage } from '../settings/settings';

declare var ePub: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  book: any;
  currentPage: any = 1;
  totalPages: any;
  pageTitle: string;

  showToolbars: boolean = true;
  bgColor: any;
  toolbarColor: string = 'light';

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public popoverCtrl: PopoverController,
    public events: Events
  ) {
    this.platform.ready().then(() => {

      // load book
      this.book = ePub("assets/books/moby-dick/");

      this.events.subscribe('select:toc', (content) => {
        this.book.goto(content.href);
      });

      this.events.subscribe('select:background-color', (color) => {
        this.book.setStyle("background-color", color);
        this.bgColor = color;
        if (color == 'rgb(255, 255, 255)' || color == 'rgb(249, 241, 228)') {
          this.toolbarColor = 'light';
        }
        else {
          this.toolbarColor = 'dark';
        }
      });

      this.events.subscribe('select:color', (color) => {
        this.book.setStyle("color", color);
      });

      this.events.subscribe('select:font-family', (family) => {
        this.book.setStyle("font-family", family);
        this.updateTotalPages();
      });
      // render book
      this.book.renderTo("book");

      this.events.subscribe('select:font-size', (size) => {
        this.book.setStyle("font-size", size);
        this.updateTotalPages();
      });

      this.book.on('book:pageChanged', (location) => {
        var currentLocation = this.book.getCurrentLocationCfi();
        this.currentPage = this.book.pagination.pageFromCfi(currentLocation);
        this.updateCurrentChapter();
      });

      this.updateTotalPages();

      this.book.getToc().then(toc => {
        this.updateCurrentChapter();
      });

    });
  }

  updateTotalPages(){
      //TODO: cancel prior pagination promise
      this.book.generatePagination().then(() => {
        this.totalPages = `of ${this.book.pagination.totalPages}`;
      });
  }

  updateCurrentChapter() {
    if (this.book.toc) {
      let chapter = this.book.toc.filter(obj => obj.href == this.book.currentChapter.href)[0];
      // Use chapter name
      this.pageTitle = chapter ? chapter.label : this.book.metadata.bookTitle;
    }
    else {
      // Use book title as fallback
      this.pageTitle = this.book.metadata.bookTitle;
    }
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
