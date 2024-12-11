import { Router } from "express";
import { gamePage } from "../controllers/gameController";

const router = Router();

router.get("/:gameId", gamePage);

export { router as gameRoutes };
