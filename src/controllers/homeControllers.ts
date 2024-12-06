import axios from "axios";
import { Request, Response } from "express";

const apiURL = process.env.APIURL || "http://localhost:3001";

export async function homePage(req: Request, res: Response) {
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
}
