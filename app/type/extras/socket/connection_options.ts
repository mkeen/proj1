import {isPresent, isString} from 'angular2/src/facade/lang';
import {ConnectionOptionsArgs} from './interfaces';

export class ConnectionOptions {
  hostname: string;
  port: number;

  constructor({hostname, port}: ConnectionOptionsArgs = {}) {
    this.hostname = isPresent(hostname) ? hostname: "localhost";
    this.port = isPresent(port) ? port: 8080;
  }
  
}

