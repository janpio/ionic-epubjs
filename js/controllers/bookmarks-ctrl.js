angular.module('starter.controllers')
.controller('BookmarksCtrl', function ($scope, $rootScope, $bookUtils) {
  $scope.removeBookmark = $bookUtils.removeBookMark;
  $scope.gotoCfi = $bookUtils.gotoCfi;
});
