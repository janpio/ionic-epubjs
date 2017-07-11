import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the TocPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {
  private toc: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events : Events) {
    this.toc = navParams.data.toc;
  }

  selectToc(content){
    this.events.publish('select:toc', content);
    this.navCtrl.pop();
  }

}
