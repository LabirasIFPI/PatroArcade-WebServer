"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRoutes = void 0;
const express_1 = require("express");
const arcadeController_1 = require("../controllers/arcadeController");
const router = (0, express_1.Router)();
exports.loginRoutes = router;
router.get("/:arcadeTempId", arcadeController_1.arcadeFirstLoginPage);
