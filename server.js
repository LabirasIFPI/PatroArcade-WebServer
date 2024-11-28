const express = require("express");
const pug = require("pug");
const axios = require("axios"); // Para fazer requisições à API

const app = express();
const port = process.env.PORT || 3000;

// Pug Setup
app.set("view engine", "pug");
app.set("views", "./views"); // Folder with the .pug files views

// Home Page Route
app.get("/", async (_req, res) => {
  try {
    // Request to the API to get the data
    const apiURL = "http://localhost:3001";
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
