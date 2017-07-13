import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  background: string;
  fontSize: any;
  fontFamily;

  colors = {
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    if (this.navParams.data) {
      this.background = this.getColorName(this.navParams.data.backgroundColor);
      this.fontSize = this.navParams.data.fontSize;
      if (this.navParams.data.fontFamily) {
        this.fontFamily = this.navParams.data.fontFamily.replace(/'/g, "");
      }
      else {
        //TODO get the default font-family
      }
    }
  }


  getColorName(background) {
    let colorName = 'white';

    if (!background) return 'white';

    for (var key in this.colors) {
      if (this.colors[key].bg == background) {
        colorName = key;
      }
    }

    return colorName;
  }

  changeBackground(color) {
    this.background = color;
    this.events.publish('select:background-color', this.colors[color].bg);
    this.events.publish('select:color', this.colors[color].fg);
  }

  changeFontSize(direction) {
    let size = this.fontSize ? this.fontSize : '1em';
    let sizeValue = +size.replace('em', '');
    let newSizeValue = direction == 'larger' ? sizeValue += 0.1 : sizeValue -= 0.1;
    if (newSizeValue >= 0.4 && newSizeValue <= 2) {
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
