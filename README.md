# ionic-epubjs

Sample project of how to use [Epub.js](https://github.com/futurepress/epub.js) in an Ionic app. 

## How Epub.js is integrated

As just importing Epub.js after installing it via `npm` unfortunately doesn't work, I copied over the `build` directory of the npm package of epubjs from `/node_modules/epubjs` to `/src/assets/epubjs` and included `epubjs.min.js` in `index.html`. That way the `ePub` object is globally available and can be used in Typescript after declaring it with `declare var ePub: any;`.

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
* Settings
  * Change font size
  * Change background color (and with it text color)
  * UI automatically adapt the toolbar color depending on the chosen background and text color
  * Change font family

