"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRoutes = void 0;
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
const router = (0, express_1.Router)();
exports.gamesRoutes = router;
router.get("/", gamesController_1.gamesPage);
