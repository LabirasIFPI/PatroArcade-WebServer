import { Router } from "express";
import { loginPage } from "../controllers/loginController";

const router = Router();

router.get("/:arcadeId", loginPage);

export { router as loginRoutes };
