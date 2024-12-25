import { Request, Response } from "express";

const apiURL = process.env.APIURL || "http://localhost:3001";

export function registerPage(req: Request, res: Response) {
  try {
    console.log("Carregando a página de registro de usuario...");
    const arcadeId = req.params.arcadeId;
    res.render("register", { apiURL, arcadeId });
  } catch (_err) {
    console.error(_err);
  }
}
