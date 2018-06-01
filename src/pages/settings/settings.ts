import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  theme: string;
  fontSize: any;
  fontFamily: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    if (this.navParams.data) {
      this.theme = this.navParams.data.theme;
      this.fontSize = this.navParams.data.fontSize;

      if (this.navParams.data.fontFamily) {
        this.fontFamily = this.navParams.data.fontFamily.replace(/'/g, ""); // TODO Huh?
      }
      else {
        this.fontFamily = "Athelas"
      }
    }
  }

  changeBackground(theme) {
    this.theme = theme;
    this.events.publish('select:theme', theme);
  }

  changeFontSize(direction) {
    let size = this.fontSize ? this.fontSize : '1em';
    let sizeValue = +size.replace('em', '');
    let newSizeValue = direction == 'larger' ? sizeValue += 0.1 : sizeValue -= 0.1;
    if (newSizeValue >= 0.4 && newSizeValue <= 2) { // TODO this should be visible in the UI (disable button)
      this.fontSize = `${newSizeValue}em`;
      this.events.publish('select:font-size', this.fontSize);
    }
  }

  changeFontFamily() {
    if (this.fontFamily) {
      this.events.publish('select:font-family', this.fontFamily);
    }

  }

}
