import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var ePub: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public platform: Platform) {
    this.platform.ready().then(() => {
      var book = ePub("assets/books/moby-dick/");
      book.renderTo("area");
    });
  }

}
