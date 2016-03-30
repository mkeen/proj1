import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: '/templates/home.html'
})
export class Home {
    constructor() {
	eval('console.log("Home Loaded")');
    }
    
}

@Component({
    selector: 'solutions',
    templateUrl: '/templates/solutions.html'
})
export class Solutions {
    constructor() {
	eval('console.log("Solutions Loaded")');
    }
    
}

@Component({
    selector: 'platform',
    templateUrl: '/templates/platform.html'
})
export class Platform {
    constructor() {
	eval('console.log("Platform Loaded")');
    }
    
}

@Component({
    selector: 'whitepapers',
    templateUrl: '/templates/whitepapers.html'
})
export class WhitePapers {
    constructor() {
	eval('console.log("White Papers Loaded")');
    }
    
}

@Component({
    selector: 'contactus',
    templateUrl: '/templates/contactus.html'
})
export class ContactUs {
    constructor() {
	eval('console.log("Contact us Loaded")');
    }
    
}
