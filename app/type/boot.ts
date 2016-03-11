///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

import {bootstrap} from 'angular2/platform/browser'
import {ROUTER_PROVIDERS, Location, LocationStrategy} from 'angular2/router';
import {Application} from './components/application';
import {provide} from 'angular2/core';

bootstrap(Application, [ROUTER_PROVIDERS]);
