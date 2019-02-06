import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {
  toc: any;
  currentSection: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events : Events) {
    this.toc = navParams.data.toc;
    this.currentSection = navParams.data.currentSection;
  }

  selectToc(content){
    this.events.publish('select:toc', content);
    this.navCtrl.pop();
  }
}
