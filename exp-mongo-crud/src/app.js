import express from "express";
import userRoutes from "./routes/user_routes.js";
import connectDB from "./config/db.js";
import { errorMiddleware } from "./middlewares/error_middleware.js";

const app = express();
app.use(express.json());

connectDB();

app.use("/api/users", userRoutes);

app.use(errorMiddleware);

export default app;