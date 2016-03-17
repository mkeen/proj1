import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ConnectionOptions} from './connection_options';
import {Message} from './message';

@Injectable()
export class Socket {
  constructor(protected _defaultOptions: ConnectionOptions) {}
}
