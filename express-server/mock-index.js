import express from "express";

const app = express();
const port = 3000;
app.use(express.json()); // body parsing

// Request & Response objects:
// req => .params, .query, .body, .headers
// res => .send, .json, .status

// Middleware = func that runs between request and response
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/info", (req, res) => {
    res.json(req.body);
});

app.get("/users/:id", (req, res) => {
    res.json({
        id: req.params.id,
        filter: req.query.active
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
