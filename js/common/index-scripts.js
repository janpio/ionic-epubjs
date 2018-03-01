function g1(f) {
  var currentHighlights = parent.angular.element(parent.document.querySelector('#area')).scope().currentHighlights;
  if (currentHighlights.length > 0 && currentHighlights[0] != '') {
    console.log('Index currentHighlights: ', currentHighlights);
    return;
  }
  var divWidth = parent.$('#area').width();
  var clickX = f.changedTouches[0].clientX;
  if (clickX && divWidth && clickX > divWidth / 2) {
    parent.angular.element(parent.document.querySelector('#area')).scope().Book.nextPage()
  } else {
    parent.angular.element(parent.document.querySelector('#area')).scope().Book.prevPage()
  }
}
document.addEventListener('touchend', g1, false);

function handleSelection() {
  parent.angular.element(parent.document.querySelector('#area')).scope().appendSelection(window.getSelection().toString());
}
document.addEventListener('selectionchange', handleSelection, false);


// // Apply a class to selected text
// rendition.on("selected", function (cfiRange, contents) {
//   rendition.annotations.highlight(cfiRange, {}, function (e) {
//     console.log("highlight clicked", e.target);
//   });
//   contents.window.getSelection().removeAllRanges();
// });
//
// this.rendition.themes.default({
//   '::selection': {
//     'background': 'rgba(255,255,0, 0.3)'
//   },
//   '.epubjs-hl': {
//     'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
//   }
// });
