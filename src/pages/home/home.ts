import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var ePub: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  book: any;

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {
      this.book = ePub("assets/books/moby-dick/");
      this.book.renderTo("area");

      // TODO What does this do?
      this.book.ready.all.then(()=>{
        console.log('ready');
        this.book.generatePagination();
      });

      // TODO What does this do?
      this.book.pageListReady.then(function (pageList) {
        alert("_pages" + this.book.pagination.totalPages);
      });

      // TODO What does this do?
      this.book.on('book:pageChanged', function (location) {
        var currentLocation = this.book.getCurrentLocationCfi();
        var currentPage = this.book.pagination.pageFromCfi(currentLocation);
        alert("_current" + currentPage);
        var page = this.book.pageList[currentPage-1];
        alert("_bookmark" + page.cfi);
      });

    });
  }

  prev(){
    this.book.prevPage();
  }

  next(){
    this.book.nextPage();
  }
}
