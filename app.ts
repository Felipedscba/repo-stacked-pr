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
  patch(path: string, action: RouteFunction) {
    this.routes.set(path, action);
  }
  sendStaticFile(path: string, filePath: string) {
    //
  }
}

const server = new Server();

server.get("/products", () => ({ message: "GET request" }));
server.post("/products", () => ({ message: "POST request" }));
server.patch("/products", () => ({ message: "PATCH request" }));
