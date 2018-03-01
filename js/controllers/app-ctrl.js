angular.module('starter.controllers')
.controller('AppCtrl', function ($scope, $rootScope, $bookUtils, $ionicPopup, $localStorage, $ionicModal, $timeout) {
  $scope.gotoBeginning = $bookUtils.gotoBeginning;
  $scope.goto = $bookUtils.goto;

  $scope.modal = {};
  $rootScope.loc = {};
  $rootScope.loc.gotoLocation = 0;
  $rootScope.loc.isBookmarked = false;

  $rootScope.currentHighlights = [];

  $rootScope.bookmarks = $localStorage.getObject('bookmarks', '[]');
  $rootScope.bookmarksCfiLocations = $localStorage.getObject('bookmarksCfiLocations', '[]');

  $rootScope.highlights = $localStorage.getObject('highlights', '[]');
  $rootScope.highlightsCfiLocations = $localStorage.getObject('highlightsCfiLocations', '[]');

  $scope.sampleBook = ePub('books/lorem-ipsum.epub');

  $scope.changeFontSize = function (fontSize) {
    $scope.localFormat.fontSize = fontSize;
    $bookUtils.setStyle($scope.sampleBook, $scope.localFormat);
  };

  $scope.changeColorMode = function (mode) {
    $scope.localFormat.colorMode = $bookUtils.colorMode[mode]();
    $bookUtils.setStyle($scope.sampleBook, $scope.localFormat);
  };

  $scope.applyFormat = function () {
    $localStorage.setObject('format', $scope.localFormat);
    $rootScope.closeModal('format').then(function () {
      $rootScope.reloadBook();
    });
  };

  $scope.$on('modal.shown', function (event, modal) {
    if (modal.id = 'format') {
      $scope.localFormat = $localStorage.getObject('format', JSON.stringify($bookUtils.defaultStyle()));
      $bookUtils.setStyle($scope.sampleBook, $scope.localFormat);
      $scope.sampleBook.renderTo('format-area');
    }
    if (modal.id = 'about') {
      $rootScope.Book.getMetadata().then(function (meta) {
        $scope.meta = meta;
      })
    }
  });

  $rootScope.showModal = function (templateUrl, id) {
    if ($scope.modal[id]) {
      $scope.modal[id].show();
      return;
    }
    $ionicModal.fromTemplateUrl(templateUrl, {
      id: id,
      scope: $scope
    }).then(function (modal) {
      $scope.modal[id] = modal;
      $scope.modal[id].show();
    });
  };

  $rootScope.closeModal = function (id) {
    return $scope.modal[id].hide();
  };

// Open the format modal
  $scope.format = function () {
    $rootScope.showModal('templates/format.html', 'format');
  };

  // Open the format modal
  $scope.about = function () {
    $rootScope.showModal('templates/about.html', 'about');
  };


  // Open the format modal
  $scope.showHighlight = function (index) {
    $scope.highlightIndex = index;
    $ionicPopup.show({
      templateUrl: 'templates/highlight.html',
      title: 'Highlight',
      scope: $scope,
      buttons: [{
        text: 'Go to Location',
        type: 'button-positive',
        onTap: function () {
          $bookUtils.gotoCfi($rootScope.Book, $rootScope.highlights[index].cfiLocation);
          return true;
        }
      }, {
        text: 'Cancel',
        type: 'button-positive',
        onTap: function () {
          return true;
        }
      }]
    });
  };

  $scope.location = function () {
    $ionicPopup.show({
      templateUrl: 'templates/location.html',
      title: 'Go to Location',
      scope: $scope,
      buttons: [{
        text: 'Go',
        type: 'button-positive',
        onTap: function () {
          $bookUtils.goto($rootScope.Book, $rootScope.toc[$rootScope.loc.gotoLocation].href);
          return true;
        }
      }, {
        text: 'Cancel',
        type: 'button-positive',
        onTap: function () {
          $bookUtils.gotoState('app.browse');
          return true;
        }
      }]
    });
  };

  $rootScope.appendSelection = function (text) {
    $timeout(function () {
      if (text=='' && $rootScope.currentHighlights[0] =='') return;
      $rootScope.currentHighlights.unshift(text);
    });
  };

});
