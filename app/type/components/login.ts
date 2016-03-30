import {Component} from 'angular2/core';

@Component({
    selector: 'login',
    templateUrl: '/templates/login.html'
})
export class Login {
    constructor() {
	eval('console.log("Login Loaded")');
    }
    
}

