"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerPage = void 0;
const apiURL = process.env.APIURL || "http://localhost:3001";
function registerPage(req, res) {
    try {
        console.log("Carregando a página de registro de usuario...");
        const arcadeId = req.params.arcadeId;
        res.render("register", { apiURL, arcadeId });
    }
    catch (_err) {
        console.error(_err);
    }
}
exports.registerPage = registerPage;
