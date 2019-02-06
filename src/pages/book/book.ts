import { Component } from '@angular/core';
import { NavController, Platform, PopoverController, Events, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { SettingsPage } from '../settings/settings';
import { Book, Rendition } from "epubjs";
import { themes } from "./themes";
// declare var ePub: any;

@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {

  book: any;
  rendition: any;
  currentPage: string;
  totalPages: any; // TODO should be number
  pageTitle: string;
  metadata: any;
  navigation: any;
  currentPageText: string;

  showToolbars: boolean = true;
  selectedTheme: string;
  bgColor: any;
  toolbarColor: string = 'light';

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public popoverCtrl: PopoverController,
    public events: Events,
    public navParams: NavParams,
  ) {

    this.platform.ready().then(() => {
      // load book
      let book = this.navParams.get('book');
      this.book = new Book(book.file);
      this.rendition = new Rendition(this.book);
      //Attached the rendition to the book Id element in our html
      this.rendition.attachTo('book');
      //Display the book. can pass optional cfi, href, int spine item
      this.rendition.display();

      //Creates a CFI for every X characters in the book
      this.book.locations.generate(); //can pass an optional X characters count

      //Register themes
      this._registerThemes();

      //Output all the objects we can work with
      this.book.loaded.metadata.then((metadata) => {
        console.log("METADATA: ", metadata);
        this.metadata = metadata;
      });
      this.book.loaded.navigation.then((navigation) => {
        console.log("NAVIGATION: ", navigation);
        this.navigation = navigation;
      });

      this.book.loaded.spine.then((spine) => { console.log("SPINE: ", spine) });
      this.book.loaded.cover.then((cover) => { console.log("COVER: ", cover) });
      this.book.loaded.resources.then((resources) => { console.log("RESOURCES: ", resources) });

      this.rendition.on('relocated', (relocated) => {
        console.log("on Relocated called: ", relocated)
        let location = this.rendition.currentLocation();
        let cfi = relocated.start.cfi;

        //Example fetching current spine location
        let item = this.book.spine.get(this.rendition.location.start.cfi);
        console.log("ITEM: ", item)

        //Example fetching current navigation item
        let navItem = this.book.navigation.get(item.href);
        console.log("NAV ITEM: ", navItem)

        this._updatePageTitle(navItem);

        //Example grabbing the current page's first block of text
        // let range = this.rendition.getRange(cfi);
        // console.log('RANGE: ', range);
        // this.currentPageText = range.startContainer.textContent.substr(range.startOffset);

        //TODO Currently not finding a good way to display current page of Total pages since the whole book
        //is no longer rendered but instead only the current section (chapter). So instead can easily display chapter and page
        //number within the chapter.
        this.currentPage = item.idref + "." + relocated.start.displayed.page;
      });

      // subscribe to events coming from other pages
      this._subscribeToEvents();
    });
  }

  _registerThemes() {

    this.rendition.themes.register("dark", themes['dark']);
    this.rendition.themes.register("grey", themes['grey']);
    this.rendition.themes.register("tan", themes['tan']);
    this.rendition.themes.register("light", themes['light']);

    //Set default theme
    this.bgColor = themes['light'].body.background;
    this.rendition.themes.select("light");
    this.selectedTheme = 'light'; //default
  }

  _subscribeToEvents() {
    console.log('subscribe to events');

    // toc: go to selected chapter
    this.events.subscribe('select:toc', (content) => {
      if(content)
        this.rendition.display(content.href);
    });

    // settings: change background color
    this.events.subscribe('select:theme', (theme) => {
      console.log('select:theme', theme);
      this.selectedTheme = theme;
      this.bgColor = themes[theme].body.background;
      this.rendition.themes.select(theme);
    });

    // settings: change font
    this.events.subscribe('select:font-family', (family) => {
      console.log('select:font-family', family);
      this.rendition.themes.font(family);
    });

    // settings: change font size
    this.events.subscribe('select:font-size', (size) => {
      console.log('select:font-size', size);
      this.rendition.themes.fontSize(size);
    });

  }

  //TODO right now no easy way to update total pages in v0.3+
  _updateTotalPages() {
    console.log('_updateTotalPages');
  }

  _updatePageTitle(navItem) {
    this.pageTitle = (navItem && navItem.label !== 'Cover') ? navItem.label : this.metadata.title;
  }


  // Navigation
  prev() {
    console.log('prev');
    this.rendition.prev();
  }

  next() {
    console.log('next');
    this.rendition.next();
  }

  toc(ev) {
    console.log('toc');
    let popover = this.popoverCtrl.create(TocPage, {
      toc: this.navigation.toc,
      currentSection: this.pageTitle //pageTitle is also the name of the current section in TOC.
    });
    popover.present({ ev });
  }

  settings(ev) {
    console.log('settings');
    let popover = this.popoverCtrl.create(SettingsPage, {
      //TODO Pass stored settings here for fontFamily, fontSize, and theme
    });
    popover.present({ ev });
  }


  // Touchlayer

  toggleToolbars() {
    console.log('toggleToolbars');
    this.showToolbars = !this.showToolbars;
  }

  changePage(event) {
    console.log('changePage', event);
    if (event.velocityX < 0) { // TODO Best way to do this?
      this.next();
    }
    else {
      this.prev();
    }
  }

}
