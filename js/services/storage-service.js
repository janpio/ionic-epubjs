angular.module('starter.services')
.factory('$localStorage', ['$window', function ($window) {
  return {
    set: function (key, value) {
      $window.localStorage[key] = value;
    },
    get: function (key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function (key, value) {
      $window.localStorage[key] = angular.toJson(value);
    },
    addObjectToArray: function (key, value) {
      var array = this.getObject(key, '[]');
      array.push(value);
      this.setObject(key, array);
    },
    getObject: function (key, value) {
      return JSON.parse($window.localStorage[key] || value);
    },
    destroy: function (key) {
      $window.localStorage.removeItem(key);
    },
    clear: function () {
      $window.localStorage.clear();
    },
    log: function (key, defaultValue) {
      console.log($window.localStorage[key] || defaultValue);
    },
    logObject: function (key) {
      console.log(JSON.parse($window.localStorage[key] || '{}'));
    }
  }
}]);
