angular.module('starter.controllers')
.controller('HighlightsCtrl', function ($scope, $rootScope, $bookUtils,$ionicPopup) {
  $scope.removeBookmark = function (cfiLocation) {
    $bookUtils.removeBookMark(cfiLocation);
  };
  $scope.gotoCfi = $bookUtils.gotoCfi;

  $scope.removeHighlight = function (index) {
    $ionicPopup.show({
      title: 'Are you sure you want to delete this highlight?',
      scope: $scope,
      buttons: [{
        text: 'Yes',
        type: 'button-positive',
        onTap: function () {
          $bookUtils.removeHighlight(index);
          return true;
        }
      }, {
        text: 'No',
        type: 'button-positive',
        onTap: function () {
          return true;
        }
      }]
    });
  };
});
