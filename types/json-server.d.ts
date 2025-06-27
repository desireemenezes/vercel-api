declare module "json-server" {
  import { Application, RequestHandler, Router } from "express";

  interface JsonServer {
    create: () => Application;
    router: (source: string | object) => Router;
    defaults: () => RequestHandler[];
  }

  const jsonServer: JsonServer;
  export default jsonServer;
}
