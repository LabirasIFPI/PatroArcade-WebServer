import axios from "axios";
import { Request, Response } from "express";

const apiURL = process.env.APIURL || "http://localhost:3001";

export async function profilePage(req: Request, res: Response) {
  try {
    console.log("Carregando a página de perfil...");
    // Obter dados do jogador:
    const {
      data: { content: playerData },
    } = await axios.get(apiURL + "/player/" + req.params.playerId);

    // Obter IDs dos jogos jogados:
    const gameIds = playerData.saveDatas.map((save: any) => save.gameId);

    // Obter informações dos jogos jogados:
    const gameInfoPromises = gameIds.map((gameId: number) =>
      axios.get(`${apiURL}/game/${gameId}`)
    );
    const gameInfosResponses = await Promise.all(gameInfoPromises);
    const gameInfos = gameInfosResponses.map(
      (response) => response.data.content
    );

    res.render("profile", { playerData, gameInfos });
  } catch (_err) {
    console.error(_err);
    res.status(500).send("Erro ao carregar a página de perfil.");
  }
}
