angular.module('starter.services')
.factory('$bookUtils', function ($ionicHistory, $state, $rootScope, $localStorage) {
  var functions = {
    setStyle: function (book, format) {
      book.setStyle("font-size", format.fontSize+'em');
      book.setStyle("color", format.colorMode.color);
      book.setStyle("background", format.colorMode.background);
    },
    defaultStyle: function () {
      return {
        'fontSize': 1.3,
        'colorMode': this.colorMode.white()
      }
    },
    colorMode: {
      white: function () {
        return {
          background: '#fafafa',
          color: '#000000'
        }
      },
      sepia: function () {
        return {
          'background': '#fbf0d9',
          'color': '#5f4b32'
        }
      },
      black: function () {
        return {
          'background': '#000000',
          'color': '#ffffff'
        }
      }
    },
    gotoState: function (state) {
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go(state);
    },
    addBookMark: function (bookmark) {
      $rootScope.bookmarks.push(bookmark);
      $rootScope.bookmarksCfiLocations.push(bookmark.cfiLocation);
      $localStorage.setObject('bookmarks', $rootScope.bookmarks);
      $localStorage.setObject('bookmarksCfiLocations', $rootScope.bookmarksCfiLocations);
      $rootScope.loc.isBookmarked = true;
    },
    removeBookMark: function (cfiLocation) {
      var bookmarkIndex = $rootScope.bookmarksCfiLocations.indexOf(cfiLocation);
      $rootScope.bookmarksCfiLocations.splice(bookmarkIndex, 1);
      $rootScope.bookmarks.splice(bookmarkIndex, 1);
      $localStorage.setObject('bookmarksCfiLocations', $rootScope.bookmarksCfiLocations);
      $localStorage.setObject('bookmarks', $rootScope.bookmarks);
      $rootScope.loc.isBookmarked = false;
    },
    addHighlight: function (highlight) {
      $rootScope.highlights.push(highlight);
      $rootScope.highlightsCfiLocations.push(highlight.cfiLocation);
      $localStorage.setObject('highlights', $rootScope.highlights);
      $localStorage.setObject('highlightsCfiLocations', $rootScope.highlightsCfiLocations);
      $rootScope.currentHighlights = [];
    },
    removeHighlight: function (index) {
      $rootScope.highlightsCfiLocations.splice(index, 1);
      $rootScope.highlights.splice(index, 1);
      $localStorage.setObject('highlights', $rootScope.highlights);
      $localStorage.setObject('highlightsCfiLocations', $rootScope.highlightsCfiLocations);
    },
    goto: function (book, href) {
      book.goto(href);
      functions.gotoState('app.browse');
    },
    gotoCfi: function (book, cfi) {
      book.gotoCfi(cfi);
      functions.gotoState('app.browse');
    },
    gotoBeginning: function (book, tocs) {
      functions.goto(book, tocs[0].href);
    },
    getLastLocation: function () {
      return $localStorage.get('lastCfiLocation', false);
    },
    saveLastLocation: function (cfiLocation) {
      $localStorage.set('lastCfiLocation', cfiLocation);
    },
    goToLastLocation: function (book) {
      var lastLocation = functions.getLastLocation();
      lastLocation && functions.gotoCfi(book, lastLocation);
    }
  };
  return functions;
});
