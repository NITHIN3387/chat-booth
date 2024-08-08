import { Server } from "socket.io";

class SocketService {
  private _io: Server;

  constructor() {
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*"
      }
    });
  }

  public listeners() {
    const io = this._io;

    io.on("connection", (socket) => {
      console.log(`new user with ID: ${socket.id}`);

      socket.on('disconnect', () => {
        console.log(`user with ID: ${socket.id} disconnected`);
      });
    })
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
