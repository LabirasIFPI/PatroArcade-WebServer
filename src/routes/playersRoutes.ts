import { Router } from "express";
import { playersPage } from "../controllers/playersController";

const router = Router();

router.get("/", playersPage);

export { router as playersRoutes };
