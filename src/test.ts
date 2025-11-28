// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js';
import 'zone.js/testing';
import '@angular/localize/init';

import {getTestBed} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Configure Jasmine
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Register custom matchers
beforeEach(() => {
  jasmine.addMatchers({
    toHaveCssClass: function(util, customEqualityTests) {
      return {compare: buildError(false), negativeCompare: buildError(true)};

      function buildError(isNot: boolean) {
        return function(actual: HTMLElement, className: string) {
          return {
            pass: actual.classList.contains(className) === !isNot,
            message: `Expected ${actual.outerHTML} ${isNot ? 'not ' : ''}to contain the CSS class "${className}"`
          };
        };
      }
    }
  });
});
