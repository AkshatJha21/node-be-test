import express from "express";
import router from "./routes/user.routes.js";
import errorMiddleware from "./middleware/error_middleware.js";

const app = express();

app.use(express.json());
app.use("/api/users", router);
app.use(errorMiddleware);

export default app;