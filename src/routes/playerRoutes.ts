import { Router } from "express";
import { playerPage } from "../controllers/playerController";

const router = Router();

router.get("/:playerId", playerPage);

export { router as playerRoutes };
