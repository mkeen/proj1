import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Dashboard} from './dashboard';
import {Login} from './login';
import {Home, Solutions, Platform, WhitePapers, ContactUs} from './marketing';
import {Router} from 'angular2/router';

@Component({
    selector: 'app', 
    templateUrl: '/templates/application.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {path: '/dashboard', name: 'Dashboard', component: Dashboard},
    {path: '/solutions', name: 'Solutions', component: Solutions},
    {path: '/platform', name: 'Platform', component: Platform},
    {path: '/white-papers', name: 'WhitePapers', component: WhitePapers},
    {path: '/contact', name: 'ContactUs', component: ContactUs}
])
export class Application {}
