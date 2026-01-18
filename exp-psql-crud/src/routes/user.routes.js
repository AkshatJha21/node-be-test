import express from "express";
import { deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import auth from "../middleware/auth_middleware.js";
import { updateUserSchema } from "../validators/user.schema.js";
import validate from "../middleware/validate_middleware.js";

const router = express.Router();

router.get("/", auth, getAllUsers);
router.get("/:id", auth, getUserById);
router.patch("/:id", auth, validate(updateUserSchema), updateUser);
router.delete("/:id", auth, deleteUser);

export default router;