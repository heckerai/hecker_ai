import express from "express";
import AuthRouter from "./AuthRouter";
import AskRouter from "./AskRouter";

const router = express.Router();

router.use("/auth", AuthRouter);
router.use("/ask", AskRouter);

export default router;
