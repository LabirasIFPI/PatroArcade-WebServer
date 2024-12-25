"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const express_1 = require("express");
const registerController_ts_1 = require("../controllers/registerController.ts");
const router = (0, express_1.Router)();
exports.registerRoutes = router;
router.get("/:arcadeId", registerController_ts_1.registerPage);
