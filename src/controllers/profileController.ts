import { Request, Response } from "express";

export async function profilePage(req: Request, res: Response) {
  try {
    console.log("Carregando a página de perfil...");

    res.render("profile", { arcadeId: req.params.arcadeId });
  } catch (_err) {
    console.error(_err);
  }
}
