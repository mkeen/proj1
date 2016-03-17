export interface ConnectionOptionsArgs {
  hostname?: string;
  port?: number;
}

export interface ConnectionArgs extends ConnectionOptionsArgs {
  url: string;
}

