import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const apiURL = process.env.APIURL || "http://localhost:3001";

export async function homePage(req: Request, res: Response) {
  try {
    console.log("Carregando a página inicial...");
    console.log("API URL:", apiURL);
    const {
      data: { content: latestNews },
    } = await axios.get(apiURL + "/latestNews");
    const {
      data: { content: leaderboards },
    } = await axios.get(apiURL + "/leaderboard");
    res.render("home", { latestNews, leaderboards });
  } catch (_err) {
    // if (_err instanceof Error) console.error(_err.message);
    console.error(_err);
    res.status(500).send("Erro ao carregar a página inicial.");
  }
}
