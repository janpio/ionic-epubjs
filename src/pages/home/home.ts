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

    let book4 = new Book();
    book4.label = "Remote with Ionic CLI service proxy [works only with `ionic serve`] (.epub)";
    book4.file = "amazon/pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
    this.books.push(book4);

    let book5 = new Book();
    book5.label = "Remote [works on device in native app only] (.epub)";
    book5.file = "https://s3-us-west-2.amazonaws.com//pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
    this.books.push(book5);

    let book6 = new Book();
    book6.label = "Remote with correct headers [works everywhere] (.epub)";
    book6.file = "https://yatsa.betamo.de/ionic-epubjs/Metamorphosis-jackson.epub";
    this.books.push(book6);

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
