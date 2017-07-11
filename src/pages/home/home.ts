import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, Events } from 'ionic-angular';
import { TocPage } from '../toc/toc';

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

  constructor(public navCtrl: NavController, public platform: Platform, public popoverCtrl: PopoverController, public events: Events) {
    this.platform.ready().then(() => {

      this.book = ePub("assets/books/moby-dick/");

      this.events.subscribe('select:toc', (content) => {
        this.book.goto(content.href);
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

}
