"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRoutes = void 0;
const express_1 = require("express");
const profileController_1 = require("../controllers/profileController");
const router = (0, express_1.Router)();
exports.profileRoutes = router;
router.get("/:playerId", profileController_1.profilePage);
