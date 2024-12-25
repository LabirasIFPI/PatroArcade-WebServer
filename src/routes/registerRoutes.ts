import { Router } from "express";
import { registerPage } from "../controllers/registerController.ts";

const router = Router();

router.get("/:arcadeId", registerPage);

export { router as registerRoutes };
