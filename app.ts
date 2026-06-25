type RouteFunction = () => Record<string, any>;

export class Server {
  private routes = new Map<string, RouteFunction>();
  get(path: string, action: RouteFunction) {
    this.routes.set(path, action);
  }
  post(path: string, action: RouteFunction) {
    this.routes.set(path, action);
  }
  delete(path: string, action: RouteFunction) {
    this.routes.set(path, action);
  }
  put(path: string, action: RouteFunction) {
    this.routes.set(path, action);
  }
}

const server = new Server();

server.get("/path", () => ({ message: "GET request" }));
server.post("/path", () => ({ message: "POST request" }));
