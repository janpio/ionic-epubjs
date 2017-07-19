import { BookPage } from './../book/book';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

export class Book {
  label: string;
  file: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  books: {}[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.books = [];

    let book1 = new Book();
    book1.label = "Moby Dick (unpacked)";
    book1.file =  "assets/books/moby-dick/";
    this.books.push(book1);

    let book2 = new Book();
    book2.label = "Moby Dick (.epub)";
    book2.file =  "assets/books/moby-dick.epub";
    this.books.push(book2);

    let book3 = new Book();
    book3.label = "Open (unpacked)";
    book3.file =  "assets/books/open/";
    this.books.push(book3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  show(book) {
    console.log('show', book);
    this.navCtrl.push(BookPage, {
      book: book
    });
  }

}
