"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcadeLoginRoutes = void 0;
const express_1 = require("express");
const arcadeController_1 = require("../controllers/arcadeController");
const router = (0, express_1.Router)();
exports.arcadeLoginRoutes = router;
router.get("/:arcadeTempId", arcadeController_1.arcadeFirstLoginPage);
