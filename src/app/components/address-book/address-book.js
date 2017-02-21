/**
 * @author ankostyuk
 */

var _       = require('lodash'),
    angular = require('angular');

var ngModules = [
    require('./ui/address-book-ui'),
    require('./contact-resource')
];

module.exports = angular.module('app.address-book', _.map(ngModules, 'name'));
