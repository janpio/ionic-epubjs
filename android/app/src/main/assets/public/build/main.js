webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Book */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_book__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Book = (function () {
    function Book() {
    }
    return Book;
}());

var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.books = [];
        var book1 = new Book();
        book1.label = "Moby Dick (unpacked)";
        book1.file = "assets/books/moby-dick/";
        this.books.push(book1);
        var book2 = new Book();
        book2.label = "Moby Dick (.epub)";
        book2.file = "assets/books/moby-dick.epub";
        this.books.push(book2);
        var book3 = new Book();
        book3.label = "Open (unpacked)";
        book3.file = "assets/books/open/";
        this.books.push(book3);
        var book4 = new Book();
        book4.label = "Remote with Ionic CLI service proxy [works only with `ionic serve`] (.epub)";
        book4.file = "amazon/pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
        this.books.push(book4);
        var book5 = new Book();
        book5.label = "Remote [works on device in native app only] (.epub)";
        book5.file = "https://s3-us-west-2.amazonaws.com//pressbooks-samplefiles/MetamorphosisJacksonTheme/Metamorphosis-jackson.epub";
        this.books.push(book5);
        var book6 = new Book();
        book6.label = "Remote with correct headers [works everywhere] (.epub)";
        book6.file = "https://yatsa.betamo.de/ionic-epubjs/Metamorphosis-jackson.epub";
        this.books.push(book6);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.show = function (book) {
        console.log('show', book);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__book_book__["a" /* BookPage */], {
            book: book
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ionic-epubjs</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p>Please choose a book to view:</p>\n  <ion-list>\n    <ion-item *ngFor="let book of books" (tap)="show(book)">{{book.label}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toc_toc__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookPage = (function () {
    function BookPage(navCtrl, platform, popoverCtrl, events, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.popoverCtrl = popoverCtrl;
        this.events = events;
        this.navParams = navParams;
        this.currentPage = 1;
        this.showToolbars = true;
        this.toolbarColor = 'light';
        var book = this.navParams.get('book');
        this.platform.ready().then(function () {
            // load book
            _this.book = ePub(book.file);
            _this._updateTotalPages();
            // load toc and then update pagetitle
            _this.book.getToc().then(function (toc) {
                _this._updatePageTitle();
            });
            // if page changes
            _this.book.on('book:pageChanged', function (location) {
                console.log('on book:pageChanged', location);
                _this._updateCurrentPage();
                _this._updatePageTitle();
            });
            // subscribe to events coming from other pages
            _this._subscribeToEvents();
        });
    }
    BookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookPage');
        // render book
        this.book.renderTo("book"); // TODO We should work with ready somehow here I think
    };
    BookPage.prototype._subscribeToEvents = function () {
        var _this = this;
        console.log('subscribe to events');
        // toc: go to selected chapter
        this.events.subscribe('select:toc', function (content) {
            _this.book.goto(content.href);
        });
        // settings: change background color
        this.events.subscribe('select:background-color', function (bgColor) {
            console.log('select:background-color', bgColor);
            _this.book.setStyle("background-color", bgColor);
            _this.bgColor = bgColor;
            // adapt toolbar color to background color
            if (bgColor == 'rgb(255, 255, 255)' || bgColor == 'rgb(249, 241, 228)') {
                _this.toolbarColor = 'light';
            }
            else {
                _this.toolbarColor = 'dark';
            }
        });
        // settings: change color
        this.events.subscribe('select:color', function (color) {
            console.log('select:color', color);
            _this.book.setStyle("color", color);
        });
        // settings: change font
        this.events.subscribe('select:font-family', function (family) {
            console.log('select:font-family', family);
            _this.book.setStyle("font-family", family);
            _this._updateTotalPages();
        });
        // settings: change font size
        this.events.subscribe('select:font-size', function (size) {
            console.log('select:font-size', size);
            _this.book.setStyle("font-size", size);
            _this._updateTotalPages();
        });
    };
    BookPage.prototype._updateCurrentPage = function () {
        console.log('_updateCurrentPage');
        // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers (bottom)
        var currentLocation = this.book.getCurrentLocationCfi();
        var page = this.book.pagination.pageFromCfi(currentLocation);
        console.log('_updateCurrentPage location =', currentLocation, 'page =', page);
        this.currentPage = page;
    };
    BookPage.prototype._updateTotalPages = function () {
        var _this = this;
        console.log('_updateTotalPages');
        //TODO: cancel prior pagination promise
        // TODO Triggers "download" of ALL pages for unpacked books. Really needed? Alternative?
        // Source: https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks#generating-and-getting-page-numbers
        this.book.generatePagination().then(function () {
            var totalPages = _this.book.pagination.totalPages;
            console.log('_updateTotalPages totalPages = ', totalPages);
            _this.totalPages = "of " + totalPages; // TODO where is this.totalPages actually used?
        }).catch(function (error) {
            console.log('_updateTotalPages error = ', error);
        });
    };
    BookPage.prototype._updatePageTitle = function () {
        var _this = this;
        console.log('_updatePageTitle');
        var bookTitle = this.book.metadata.bookTitle;
        var pageTitle = bookTitle; // default to book title
        if (this.book.toc) {
            // Use chapter name
            var chapter = this.book.toc.filter(function (obj) { return obj.href == _this.book.currentChapter.href; })[0]; // TODO What does this code do?
            pageTitle = chapter ? chapter.label : bookTitle; // fallback to book title again
        }
        console.log('_updatePageTitle title =', pageTitle);
        this.pageTitle = pageTitle;
    };
    // Navigation
    BookPage.prototype.prev = function () {
        console.log('prev');
        if (this.currentPage == 2) {
            this.book.gotoPage(1);
        }
        else {
            this.book.prevPage();
        }
    };
    BookPage.prototype.next = function () {
        console.log('next');
        this.book.nextPage();
    };
    BookPage.prototype.toc = function (ev) {
        console.log('toc');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__toc_toc__["a" /* TocPage */], {
            toc: this.book.toc
        });
        popover.present({ ev: ev });
    };
    BookPage.prototype.settings = function (ev) {
        console.log('settings');
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */], {
            backgroundColor: this.book.settings.styles['background-color'],
            fontFamily: this.book.settings.styles['font-family'],
            fontSize: this.book.settings.styles['font-size'],
        });
        popover.present({ ev: ev });
    };
    // Touchlayer
    BookPage.prototype.toggleToolbars = function () {
        console.log('toggleToolbars');
        this.showToolbars = !this.showToolbars;
    };
    BookPage.prototype.changePage = function (event) {
        console.log('changePage', event);
        if (event.velocityX < 0) {
            this.next();
        }
        else {
            this.prev();
        }
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\book\book.html"*/'<ion-header>\n\n  <ion-navbar transparent [color]="toolbarColor" [hidden]="!showToolbars">\n    <ion-buttons start>\n      <button ion-button icon-only (tap)="toc($event)">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>{{pageTitle}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="settings($event)">\n        <ion-icon name="settings"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content [ngStyle]="{\'backgroundColor\': bgColor}" no-bounce>\n  <div id="touchlayer" (tap)="toggleToolbars()" (swipe)="changePage($event)"></div>\n  <div id="book"></div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar transparent [color]="toolbarColor" *ngIf="showToolbars">\n    <ion-buttons start>\n      <button ion-button icon-only (tap)="prev()">\n        <ion-icon name="arrow-dropleft-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Page {{currentPage}} {{(book && book.pagination && book.pagination.totalPages) ? \' of \' + book.pagination.totalPages : \'\'}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (tap)="next()">\n        <ion-icon name="arrow-dropright-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\book\book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TocPage = (function () {
    function TocPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.toc = navParams.data.toc;
    }
    TocPage.prototype.selectToc = function (content) {
        this.events.publish('select:toc', content);
        this.navCtrl.pop();
    };
    TocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-toc',template:/*ion-inline-start:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\toc\toc.html"*/'<ion-list>\n  <ion-item class="toc" *ngFor="let chapter of toc" (tap)="selectToc(chapter)">\n    {{chapter.label}}\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\toc\toc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], TocPage);
    return TocPage;
}());

//# sourceMappingURL=toc.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.colors = {
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
        if (this.navParams.data) {
            var backgroundColor = this.navParams.data.backgroundColor;
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
    SettingsPage.prototype._getColorName = function (color) {
        if (!color)
            return 'white';
        var colorName = 'white';
        for (var key in this.colors) {
            if (this.colors[key].bg == color) {
                colorName = key;
            }
        }
        return colorName;
    };
    SettingsPage.prototype.changeBackground = function (backgroundColor) {
        this.backgroundColor = backgroundColor;
        this.events.publish('select:background-color', this.colors[backgroundColor].bg);
        this.events.publish('select:color', this.colors[backgroundColor].fg);
    };
    SettingsPage.prototype.changeFontSize = function (direction) {
        var size = this.fontSize ? this.fontSize : '1em';
        var sizeValue = +size.replace('em', '');
        var newSizeValue = direction == 'larger' ? sizeValue += 0.1 : sizeValue -= 0.1;
        if (newSizeValue >= 0.4 && newSizeValue <= 2) {
            this.fontSize = newSizeValue + "em";
            this.events.publish('select:font-size', this.fontSize);
        }
    };
    SettingsPage.prototype.changeFontFamily = function () {
        if (this.fontFamily) {
            this.events.publish('select:font-family', this.fontFamily);
        }
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\settings\settings.html"*/'<ion-row>\n  <ion-col>\n    <button (click)="changeFontSize(\'smaller\')" ion-item detail-none class="text-button text-smaller">A</button>\n  </ion-col>\n  <ion-col>\n    <button (click)="changeFontSize(\'larger\')" ion-item detail-none class="text-button text-larger">A</button>\n  </ion-col>\n</ion-row>\n<ion-row class="row-dots">\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'white\')" class="dot-white" [class.selected]="background == \'white\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'tan\')" class="dot-tan" [class.selected]="background == \'tan\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'grey\')" class="dot-grey" [class.selected]="background == \'grey\'"></button>\n  </ion-col>\n  <ion-col>\n    <button ion-button="dot" (click)="changeBackground(\'black\')" class="dot-black" [class.selected]="background == \'black\'"></button>\n  </ion-col>\n</ion-row>\n\n<ion-list radio-group [(ngModel)]="fontFamily" (ionChange)="changeFontFamily()" class="settings-page">\n  <ion-item class="text-athelas">\n    <ion-label>Athelas</ion-label>\n    <ion-radio value="Athelas"></ion-radio>\n  </ion-item>\n  <ion-item class="text-charter">\n    <ion-label>Charter</ion-label>\n    <ion-radio value="Charter"></ion-radio>\n  </ion-item>\n  <ion-item class="text-iowan">\n    <ion-label>Iowan</ion-label>\n    <ion-radio value="Iowan"></ion-radio>\n  </ion-item>\n  <ion-item class="text-palatino">\n    <ion-label>Palatino</ion-label>\n    <ion-radio value="Palatino"></ion-radio>\n  </ion-item>\n  <ion-item class="text-san-francisco">\n    <ion-label>San Francisco</ion-label>\n    <ion-radio value="San Francisco"></ion-radio>\n  </ion-item>\n  <ion-item class="text-seravek">\n    <ion-label>Seravek</ion-label>\n    <ion-radio value="Seravek"></ion-radio>\n  </ion-item>\n  <ion-item class="text-times-new-roman">\n    <ion-label>Times New Roman</ion-label>\n    <ion-radio value="Times New Roman"></ion-radio>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_book_book__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_toc_toc__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_toc_toc__["a" /* TocPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_toc_toc__["a" /* TocPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Projects\Ionic Demo Projects\ionic-epubjs\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map