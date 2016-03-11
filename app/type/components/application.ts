import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dashboard} from './dashboard';
import {Router} from 'angular2/router';

@Component({
    selector: 'app', 
    templateUrl: '/templates/application.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', redirectTo: ['Dashboard']},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard}
])
export class Application { }