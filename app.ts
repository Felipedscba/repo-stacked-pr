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

server.get("/products", () => ({ message: "GET request" }));
server.post("/products", () => ({ message: "POST request" }));
