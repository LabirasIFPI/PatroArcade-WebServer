import { Request, Response } from "express";

const apiURL = process.env.APIURL || "http://localhost:3001";

export function loginPage(req: Request, res: Response) {
  try {
    console.log("Carregando a página de login...");

    res.render("login", { arcadeId: req.params.arcadeId });
  } catch (_err) {
    console.error(_err);
  }
}
