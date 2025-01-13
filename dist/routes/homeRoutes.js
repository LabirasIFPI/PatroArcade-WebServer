"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeRoutes = void 0;
const express_1 = require("express");
const homeControllers_1 = require("../controllers/homeControllers");
const router = (0, express_1.Router)();
exports.homeRoutes = router;
router.get("/", homeControllers_1.homePage);
