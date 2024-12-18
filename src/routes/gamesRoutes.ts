import { Router } from "express";
import { gamesPage } from "../controllers/gamesController";

const router = Router();

router.get("/", gamesPage);

export { router as gamesRoutes };
