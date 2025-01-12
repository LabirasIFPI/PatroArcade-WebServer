import { Router } from "express";
import { arcadeFirstLoginPage } from "../controllers/arcadeController";

const router = Router();

router.get("/:arcadeTempId", arcadeFirstLoginPage);

export { router as arcadeLoginRoutes };
