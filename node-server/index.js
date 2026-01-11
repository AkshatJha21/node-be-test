// import { add, pathBatao, fileSystum } from "./utils.js";
import http from "http";

// JS runtime
// Built on v8
// Uses event driven non-blocking i/o

// console.log(add(2, 3));
// pathBatao();
// fileSystum();

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Home");
    } else if (req.url === "/users") {
        res.write(JSON.stringify([{ id: 1, name: "Akshat" }]));
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});