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
  currentChapter: any;
  totalPages: any;
  showToolbars: boolean = true;
  
  constructor(public navCtrl: NavController, public platform: Platform, public popoverCtrl: PopoverController, public events: Events) {
    this.platform.ready().then(() => {

      this.book = ePub("assets/books/epub/complete.epub");

      this.events.subscribe('select:toc', (content) => {
        this.book.goto(content.href);
      });

      this.events.subscribe('select:background-color', (color) => {
        this.book.setStyle("background-color", color);
      });

      this.events.subscribe('select:color', (color) => {
        this.book.setStyle("color", color);
      });

      this.events.subscribe('select:font-family', (family) => {
        this.book.setStyle("font-family", family);
      });

      this.events.subscribe('select:font-size', (size) => {
        this.book.setStyle("font-size", size);
      });

      this.book.on('book:pageChanged', (location) => {
        var currentLocation = this.book.getCurrentLocationCfi();
        this.currentPage = this.book.pagination.pageFromCfi(currentLocation);
        this.extractCurrentChapter();
      });

      this.book.generatePagination().then(() => {
        this.totalPages = `of ${this.book.pagination.totalPages}`;
      });

      this.book.getToc().then(toc => {
        this.extractCurrentChapter();
      });

      this.book.renderTo("area");
    });
  }

  extractCurrentChapter() {
    if (this.book.toc) {
      let chapter = this.book.toc.filter(obj => obj.href == this.book.currentChapter.href)[0];
      this.currentChapter = chapter ? chapter.label : this.book.metadata.bookTitle;
    }
    else {
      this.currentChapter = this.book.metadata.bookTitle;
    }
  }

  prev() {
    if (this.currentPage == 2) {
      this.book.gotoPage(1);
    }
    else {
      this.book.prevPage();
    }
  }

  next() {
    this.book.nextPage();
  }

  toc(ev) {
    let popover = this.popoverCtrl.create(TocPage, {
      toc: this.book.toc
    });
    popover.present({ ev });
  }

  settings(ev) {
    let popover = this.popoverCtrl.create(SettingsPage, {
      backgroundColor: this.book.settings.styles['background-color'],
      fontFamily : this.book.settings.styles['font-family'],
      fontSize : this.book.settings.styles['font-size'],
    });
    popover.present({ ev });
  }

  toggleToolbars() {
    this.showToolbars = !this.showToolbars;
  }

  changePage(event) {
    if (event.velocityX < 0) {
      this.next();
    }
    else {
      this.prev();
    }
  }

}
