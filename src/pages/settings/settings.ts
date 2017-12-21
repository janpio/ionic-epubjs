import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  backgroundColor: string;
  fontSize: any;
  fontFamily: any;

  colors = { // TODO Don't send color codes back to the book page, make it set classes
    'white': {
      'bg': 'rgb(255, 255, 255)',
      'fg': 'rgb(0, 0, 0)'
    },
    'tan': {
      'bg': 'rgb(249, 241, 228)',
      'fg': 'rgb(0, 0, 0)'
    },
    'grey': {
      'bg': 'rgb(76, 75, 80)',
      'fg': 'rgb(255, 255, 255)'
    },
    'black': {
      'bg': 'rgb(0, 0, 0)',
      'fg': 'rgb(255, 255, 255)'
    },
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    if (this.navParams.data) {
      let backgroundColor = this.navParams.data.backgroundColor;
      this.backgroundColor = this._getColorName(backgroundColor);
      this.fontSize = this.navParams.data.fontSize;
      if (this.navParams.data.fontFamily) {
        this.fontFamily = this.navParams.data.fontFamily.replace(/'/g, ""); // TODO Huh?
      }
      else {
        //TODO get the default font-family
      }
    }
  }

  _getColorName(color) {
    if (!color) return 'white';
    let colorName = 'white';
    for (var key in this.colors) {
      if (this.colors[key].bg == color) {
        colorName = key;
      }
    }
    return colorName;
  }

  changeBackground(backgroundColor) {
    this.backgroundColor = backgroundColor;
    this.events.publish('select:background-color', this.colors[backgroundColor].bg);
    this.events.publish('select:color', this.colors[backgroundColor].fg);
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
