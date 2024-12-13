import axios from "axios";
import { Request, Response } from "express";

const apiURL = process.env.APIURL || "http://localhost:3001";

export async function profilePage(req: Request, res: Response) {
  try {
    console.log("Carregando a página de perfil...");
    // Obter dados do jogador:
    const {
      data: { content: playerData },
    } = await axios.get(apiURL + "/profile/" + req.params.playerId);

    res.render("profile", { playerData });
  } catch (_err) {
    console.error(_err);
    res.status(500).send("Erro ao carregar a página de perfil.");
  }
}
