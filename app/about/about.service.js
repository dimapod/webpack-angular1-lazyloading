"use strict";

import angular from 'angular';

class AboutService {
  constructor() {
    this.name = 'Webpack';
  }

  tell() {
    return 'About ' + this.name;
  }
}

export default angular.module('app.about')
  .service('aboutService', AboutService)
  .name;
