/**
 * Created by davelin on 16/3/24.
 */
// JavaScript Document

var m1 = angular.module('module1', []);
var m2 = angular.module('module2', []);

m1.factory('myService1', function() {
  return {
    name: 'hello',
    show: function() {
      return this.name + ':angular';
    }
  };
});

m2.provider('myService2', function() {
  return {
    name: 'hello',
    $get: function() {
      return {
        name: this.name,
        show: function() {
          return this.name + ':angular';
        }
      };
    }
  };
});