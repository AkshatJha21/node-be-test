import express from "express";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import errorMiddleware from "./middleware/error_middleware.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use(errorMiddleware);

export default app;