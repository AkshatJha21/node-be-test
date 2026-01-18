import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import validate from "../middleware/validate_middleware.js";
import { loginSchema, registerSchema } from "../validators/auth.schema.js";

const router = express.Router();

router.post("/signup", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;