import { Router } from "express";
import { profilePage } from "../controllers/profileController";

const router = Router();

router.get("/:profileId", profilePage);

export { router as profileRoutes };
