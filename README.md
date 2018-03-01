# ionic-epubjs

Sample project of how to use [Epub.js](https://github.com/futurepress/epub.js) in an Ionic app. 

## How Epub.js is integrated

As just natively importing Epub.js after installing it via `npm` unfortunately doesn't work, I copied over the `build` directory of the npm package of epubjs from `/node_modules/epubjs` to `/src/assets/epubjs` and included `epubjs.min.js` in `index.html`. That way the `ePub` object is globally available and can be used in Typescript after declaring it with `declare var ePub: any;`.

## Functionality

* Open books
  * Load and render locally available books from `/assets/books`
  * Switch between different books
* Reading UI
  * Tap through pages by using "next" and "previous" buttons
  * Swipe pages to go to next or previous page
  * Tap the page to toggle a reading mode with no UI
  * Display page number the reader is currently on
  * Display total number of pages in book
  * Display chapter title the reader is currently in
* Table of Contents
  * Show the table of contents of a book
  * Tap chapter to go there
* Settings
  * Change font size
  * Change background color (and with it text color)
  * UI automatically adapts the toolbar color depending on the chosen background and text color
  * Change font family

## Development

1. Clone the repo
2. Run `npm install`
3. Run `ionic cordova prepare`
4. Run `ionic serve` or `ionic cordova run android|ios`

## Information + Resources

* Good to know
  * Cfi = [EPUB Canonical Fragment Identifiers](http://www.idpf.org/epub/linking/cfi/epub-cfi.html)
  * EPUB is a registered trademark of the [IDPF](http://idpf.org/)

* Epub.js
  * [https://github.com/futurepress/epub.js](https://github.com/futurepress/epub.js)
  * [https://github.com/futurepress/epub.js/blob/master/documentation/README.md](https://github.com/futurepress/epub.js/blob/master/documentation/README.md)
    * [https://github.com/futurepress/epub.js/blob/master/documentation/README.md#methods](https://github.com/futurepress/epub.js/blob/master/documentation/README.md#methods)
    * [https://github.com/futurepress/epub.js/blob/master/documentation/README.md#events](https://github.com/futurepress/epub.js/blob/master/documentation/README.md#events)
  * [https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks](https://github.com/futurepress/epub.js/wiki/Tips-and-Tricks)
  * Examples
    * [http://futurepress.github.io/epub.js/](http://futurepress.github.io/epub.js/)
    * [https://github.com/futurepress/epub.js/tree/master/examples](https://github.com/futurepress/epub.js/tree/master/examples)

## Related projects

* There is a [Ionic v1 based "Ionic Reader"](https://github.com/Nipun04/Ionic-Reader) that also uses Epub.js. It claims to "fix iOS flickering" and also has additional features "Last location, Go to location, Bookmarks, Highlights"
