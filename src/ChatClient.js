import { io } from "socket.io-client";

export default function() {
  return io("localhost:4000", { transports: ["websocket"] });
}
