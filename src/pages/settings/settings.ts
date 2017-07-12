import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  book: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data) {
      this.book = this.navParams.data.book;

      this.setBackground();
      this.setFontFamily();
    }
  }

  background: string;
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

  setFontFamily() {
    if (this.book.settings.styles['font-family']) {
      this.fontFamily = this.book.settings.styles['font-family'].replace(/'/g, "");
    }
    else{
      //TODO get the default font-family
    }
  }

  setBackground() {
      this.background = this.getColorName(this.book.settings.styles['background-color']);
  }

  changeBackground(color) {
    this.background = color;
    this.book.setStyle("background-color", this.colors[color].bg);
    this.book.setStyle("color", this.colors[color].fg);
  }

  changeFontSize(direction) {
    let size = this.book.settings.styles['font-size'] ? this.book.settings.styles['font-size'] : '1em';
    let sizeValue = +size.replace('em', '');
    let newSizeValue = direction == 'larger' ? sizeValue+=0.1 : sizeValue-=0.1;
    if(newSizeValue >= 0.4 && newSizeValue <= 2){
      this.book.setStyle("font-size", `${newSizeValue}em`);
      this.book.generatePagination();
    }
  }

  changeFontFamily() {
    if (this.fontFamily){
      this.book.setStyle("font-family", this.fontFamily);
    } 
      
  }

}
