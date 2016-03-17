import {Component, View} from 'angular2/core';

@Component({
    selector: 'dashboard' 
})
@View({
    templateUrl: '/templates/dashboard.html'
})
export class Dashboard {
    videosrc: string;
    constructor() {
	eval('FSGetCam();');
    }
    
}

