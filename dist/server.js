"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeRoutes_1 = require("./routes/homeRoutes");
require("dotenv").config();
const express = require("express"); // Para criar o servidor
const pug = require("pug"); // Para renderizar as páginas
const axios = require("axios"); // Para fazer requisições à API
const path = require("path");
const app = express();
const port = process.env.PORT || 5999;
const apiURL = process.env.APIURL || "http://localhost:3001";
// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));
app.use("/public", express.static(path.join(__dirname, "../public")));
// Home Page Route
app.use("/", homeRoutes_1.homeRoutes);
app.listen(port, () => {
    console.clear();
    console.log(`PatroPage Server on port: ${port}`);
});
