import {ConnectionArgs} from './interfaces';

export class Connection {
  url: string;

  constructor(connectionOptions: ConnectionArgs) {
    // TODO: assert that url is present
    let url = connectionOptions.url;
    this.url = connectionOptions.url;
    
  }
  
}