angular.module('starter.controllers')
.controller('BrowseCtrl', function ($scope, $rootScope, $bookUtils, $localStorage, $ionicSideMenuDelegate, $timeout) {
    $ionicSideMenuDelegate.canDragContent(false);
    $rootScope.currentExcerpt = "";
    $scope.showPercentage = true;

    function loadBook() {
      var width = $('#area').width();
      console.log("'#area').width()", width);
      $scope.bookFormat = $localStorage.getObject('format', JSON.stringify($bookUtils.defaultStyle()));

      $rootScope.Book = ePub('books/moby-dick.epub', {
        width: width,
        styles: { "font-size": $scope.bookFormat.fontSize + 'em' },
        goto: $bookUtils.getLastLocation()
      });
      $rootScope.Book.forceSingle(true);
      $bookUtils.setStyle($rootScope.Book, $scope.bookFormat);
      return $rootScope.Book.renderTo('area');
    }

    $scope.$on('$ionicView.loaded', function () {
      loadBook().then(function () {
        $rootScope.Book.getToc().then(function (toc) {
          $timeout(function () {
            $rootScope.toc = toc;
          });
        });

        $rootScope.Book.getMetadata().then(function (meta) {
          $timeout(function () {
            $scope.title = meta.bookTitle;
          });
        });
        addBookEventListeners();
        // !$rootScope.pagination && generatePagination().then(function (pagination) {
        //   $timeout(function () {
        //     $rootScope.pagination = pagination;
        //     $rootScope.percentage = $rootScope.pagination ? $rootScope.pagination.percentageFromCfi($bookUtils.getLastLocation()) : $rootScope.percentage;
        //   });
        // });
      });
    });

    $rootScope.reloadBook = function (timeout) {
      $rootScope.Book.destroy();
      $timeout(function () {
        loadBook().then(function () {
          addBookEventListeners();
        });
      }, timeout);
    };

    // Bookmarks
    $rootScope.bookmarking = function () {
      if ($rootScope.loc.isBookmarked) {
        $rootScope.removeBookmark()
      } else {
        $rootScope.addBookmark();
      }
    };

    $rootScope.addBookmark = function () {
      var currentCfiLocation = $rootScope.Book.getCurrentLocationCfi();
      var excerpt = $rootScope.currentExcerpt;
      var bookmark = {
        cfiLocation: currentCfiLocation,
        excerpt: excerpt,
        position: $rootScope.Book.spinePos
      };
      $bookUtils.addBookMark(bookmark);
    };

    $rootScope.removeBookmark = function () {
      var currentCfiLocation = $rootScope.Book.getCurrentLocationCfi();
      $bookUtils.removeBookMark(currentCfiLocation);
    };

    $scope.prevPage = function () {
      $rootScope.Book.prevPage();
    };

    $scope.nextPage = function () {
      $rootScope.Book.nextPage();
    };

    $scope.highlight = function () {
      if ($rootScope.currentHighlights.length > 0) {
        var currentCfiLocation = $rootScope.Book.getCurrentLocationCfi();
        var highlight = {
          cfiLocation: currentCfiLocation,
          highlight: $rootScope.currentHighlights[0] != '' ? $rootScope.currentHighlights[0] : $rootScope.currentHighlights[1],
          position: $rootScope.Book.spinePos
        };
        $bookUtils.addHighlight(highlight);
      }
    };

    function addBookEventListeners() {

      // if (screenfull.enabled){
      //   screenfull.onchange(function(){
      //     console.log('Am I fullscreen?', screenfull.isFullscreen ? 'Yes' : 'No');
      // });
      // }
      $rootScope.Book.on("renderer:locationChanged", function (locationCfi) {
        console.log("Current Location: ", locationCfi);
        $timeout(function () {
          $rootScope.loc.isBookmarked = $rootScope.bookmarksCfiLocations.indexOf(locationCfi) != -1;
          $rootScope.percentage = $rootScope.pagination ? $rootScope.pagination.percentageFromCfi(locationCfi) : $rootScope.percentage;
          $bookUtils.saveLastLocation(locationCfi);
        });
      });

      $rootScope.Book.on("renderer:ready", function () {
        console.log("book:ready");
      });

      $rootScope.Book.on("renderer:beforeChapterDisplay", function (locationCfi) {
        $timeout(function () {
          $rootScope.loc.isBookmarked = $rootScope.bookmarksCfiLocations.indexOf(locationCfi) != -1;

        });
      });

      $rootScope.Book.on("renderer:visibleRangeChanged", function (cfirange) {
        var cfi = new EPUBJS.EpubCFI();
        var startRange = cfi.generateRangeFromCfi(cfirange.start, $rootScope.Book.renderer.render.document);
        var endRange = cfi.generateRangeFromCfi(cfirange.end, $rootScope.Book.renderer.render.document);
        // Create a new range to handle full cfi range (this should be fixed in v0.3)
        var fullRange = document.createRange();
        if (startRange) {
          fullRange.setStart(startRange.startContainer, startRange.startOffset);
        }
        if (endRange) {
          fullRange.setEnd(endRange.startContainer, endRange.startOffset);
        }
        $rootScope.currentExcerpt = fullRange.toString();
      });
    }

    function generatePagination() {
      var width = $('#area').width();
      var height = $('#area').height();
      return $rootScope.Book.generatePagination(width, height).then(function (toc) {
        return $rootScope.Book.pagination;
      });
    }

    $scope.showHidePercentage = function () {
      $scope.showPercentage = !$scope.showPercentage;
    }

    $scope.requestScreenFull = function () {
      if (screenfull.enabled && !screenfull.isFullscreen) {
        screenfull.request($('#full')[0]);
        $rootScope.reloadBook(500);

      } else {
        screenfull.exit();
        $rootScope.reloadBook(500);
      }
    }
    $scope.isScreenFull = function () {
      return (screenfull.enabled && screenfull.isFullscreen)
    }
  }
);
