// Import Routes
import { gameRoutes } from "./routes/gameRoutes";
import { homeRoutes } from "./routes/homeRoutes";
import { loginRoutes } from "./routes/loginRoutes";
import { profileRoutes } from "./routes/profileRoutes";

// Import dotenv
import dotenv from "dotenv";
dotenv.config();

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
app.use("/", homeRoutes);
app.use("/login", loginRoutes);
app.use("/game", gameRoutes);
app.use("/profile", profileRoutes);

app.listen(port, () => {
  console.clear();
  console.log(`PatroPage Server on port: ${port}`);
});
