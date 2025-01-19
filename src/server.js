import http from "http"
import WebSocket from "ws";
import express from "express";

const app = express();

app.set('view engine', "pug");
app.set('views', __dirname + "/views")
app.use('/public', express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

console.log("hi")
const handleListen = () => console.log(`Listening on http://localhost:3000 and ws://localhost:3000`);

const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({server});

webSocketServer.on("connection", (socket) => {
    console.log("서버가 브라우저에 연결되었습니다!")
    socket.on("close", () => {console.log("클라이언트랑 연결이 끊어졌다.")})
    socket.on("message", (message)=>{})
    socket.send("클라이언트에 보내는 메세지!")
})

server.listen(3000, handleListen)