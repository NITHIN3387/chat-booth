import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import SocketService from "./services/socket-io";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
const server = createServer(app);

const socketService = new SocketService();

socketService.io.attach(server);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.WEB_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.get("/", (req, res) => res.send("server working fine"));

server.listen(PORT, () =>
  console.log(`server started running at PORT: ${PORT}`)
);

socketService.listeners();
