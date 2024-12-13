import { Router } from "express";
import { profilePage } from "../controllers/profileController";

const router = Router();

router.get("/:playerId", profilePage);

export { router as profileRoutes };
