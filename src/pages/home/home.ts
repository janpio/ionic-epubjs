import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var ePub: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  test: any;
  book: any;
  currentPage: any = 1;
  totalPages: any;
  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {

      this.book = ePub("assets/books/moby-dick/");

      this.book.renderTo("area");

      this.book.ready.all.then(foo => {
        this.book.generatePagination().then(() => {
          this.totalPages = `of ${this.book.pagination.totalPages}`;
        });
      });

    });
  }

  prev() {
    if (this.currentPage == 2) {
      this.book.gotoPage(1).then(()=>{
        this.currentPage--;
      });
    }
    else {
      this.book.prevPage().then(()=>{
        this.currentPage--;
      });
    }
  }

  next() {
    this.book.nextPage().then(()=>{
        this.currentPage++;
      });
  }

}
