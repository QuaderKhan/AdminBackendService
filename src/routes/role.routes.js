import express from "express";
import * as roleController from "../controllers/role.controller.js";
import { protect } from "../middlewares/authMiddleware.js";
import { restrictTo } from "../middlewares/role.middleware.js";

const router = express.Router();

// Only admin can create new roles
router.post("/", protect, restrictTo("admin"), roleController.createRole);

// Everyone can list roles
router.get("/", roleController.getRoles);

export default router;