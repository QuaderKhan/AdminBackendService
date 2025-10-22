import express from "express";
import * as userController from "../controllers/user.controller.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Apply protect middleware to all routes
router.post("/",  protect,userController.createUser);
router.get("/",protect ,userController.getUsers);
router.get("/:id",  protect ,userController.getUserById);
router.put("/:id",protect , userController.updateUser);
router.delete("/:id", protect , userController.deleteUser);

export default router;
