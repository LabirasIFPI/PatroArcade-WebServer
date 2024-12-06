require("dotenv").config();

const express = require("express"); // Para criar o servidor
const pug = require("pug"); // Para renderizar as páginas
const axios = require("axios"); // Para fazer requisições à API
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
// Request to the API to get the data
const apiURL = process.env.APIURL || "http://localhost:3001";

// Static Files
app.use(express.static("public"));
console.log("Static Files: OK");

// Pug Setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views")); // Correct path configuration

// Home Page Route
app.get("/", async (_req, res) => {
  try {
    console.log("Carregando a página inicial...");
    const {
      data: { content: latestNews },
    } = await axios.get(apiURL + "/latestNews");
    const {
      data: { content: leaderboards },
    } = await axios.get(apiURL + "/leaderboard");
    res.render("home", { latestNews, leaderboards });
  } catch (_err) {
    console.error(_err);
    res.status(500).send("Erro ao carregar a página inicial.");
  }
});

app.listen(port, () => {
  console.clear();
  console.log(`PatroPage Server on port: ${port}`);
});

// module.exports = app;
