"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Routes
const gameRoutes_1 = require("./routes/gameRoutes");
const homeRoutes_1 = require("./routes/homeRoutes");
const loginRoutes_1 = require("./routes/loginRoutes");
const profileRoutes_1 = require("./routes/profileRoutes");
// Import dotenv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Express
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 6969;
// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use("/public", express.static(path.join(__dirname, "../public")));
// Setup Routes
app.use("/", homeRoutes_1.homeRoutes);
app.use("/login", loginRoutes_1.loginRoutes);
app.use("/game", gameRoutes_1.gameRoutes);
app.use("/profile", profileRoutes_1.profileRoutes);
app.listen(port, () => {
    console.clear();
    console.log(`PatroPage Server on port: ${port}`);
});
