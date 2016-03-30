import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: '/templates/dashboard.html'
})
export class Dashboard {
    videosrc: string;
    constructor() {
	eval('FSGetCam();');
    }
    
}

