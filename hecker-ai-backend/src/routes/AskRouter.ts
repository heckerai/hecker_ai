import express from "express";
import AskController from "../controllers/AskController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/validate", authMiddleware, AskController.validateCode);
router.post("/generate", authMiddleware, AskController.generateCode);

export default router;
