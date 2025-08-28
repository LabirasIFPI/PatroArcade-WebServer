"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Routes
const gameRoutes_1 = require("./routes/gameRoutes");
const gamesRoutes_1 = require("./routes/gamesRoutes");
const homeRoutes_1 = require("./routes/homeRoutes");
const loginRoutes_1 = require("./routes/loginRoutes");
const playerRoutes_1 = require("./routes/playerRoutes");
const playersRoutes_1 = require("./routes/playersRoutes");
// Import dotenv
const dotenv_1 = __importDefault(require("dotenv"));
const registerRoutes_1 = require("./routes/registerRoutes");
const arcadeLoginRoutes_1 = require("./routes/arcadeLoginRoutes");
dotenv_1.default.config();
// Express
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 6969;
// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
// Middlewares
// app.use(setSecurityHeaders);
// Setup Routes
app.use("/", homeRoutes_1.homeRoutes);
app.use("/login", loginRoutes_1.loginRoutes);
app.use("/arcadeLogin", arcadeLoginRoutes_1.arcadeLoginRoutes);
app.use("/game", gameRoutes_1.gameRoutes);
app.use("/games", gamesRoutes_1.gamesRoutes);
app.use("/player", playerRoutes_1.playerRoutes);
app.use("/players", playersRoutes_1.playersRoutes);
app.use("/register", registerRoutes_1.registerRoutes);
app.listen(port, () => {
    console.clear();
    console.log(`PatroPage Server on port: ${port}`);
});
