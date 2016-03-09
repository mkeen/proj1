///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/platform/browser', './components/application'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, application_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (application_1_1) {
                application_1 = application_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(application_1.Application);
        }
    }
});
