# ionic-epubjs

This is a very hackish sample of using [epubjs](https://www.npmjs.com/package/epubjs) in an Ionic app. 

As just importing the library after installing it via npm unfortunately doesn't work, I copied over the `build` directly of epubjs to assets, included `epubjs.min.js` in `index.html` and wired it together that way. A locally included book can successfully be rendered when running `ionic serve`.
