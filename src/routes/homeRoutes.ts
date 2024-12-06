import { Router } from "express";
import { homePage } from "../controllers/homeControllers";

// Cria instancia de router
const router = Router();

router.get("/", homePage);

export { router as homeRoutes };
