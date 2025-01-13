"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playersRoutes = void 0;
const express_1 = require("express");
const playersController_1 = require("../controllers/playersController");
const router = (0, express_1.Router)();
exports.playersRoutes = router;
router.get("/", playersController_1.playersPage);
