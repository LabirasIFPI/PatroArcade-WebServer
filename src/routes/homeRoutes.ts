import { Router } from "express";
import { homePage } from "../controllers/homeControllers";

const router = Router();

router.get("/", homePage);

export { router as homeRoutes };
