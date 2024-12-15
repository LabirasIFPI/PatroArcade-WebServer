"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginPage = void 0;
function loginPage(req, res) {
    try {
        console.log("Carregando a página de login...");
        res.render("login", { arcadeId: req.params.arcadeId });
    }
    catch (_err) {
        console.error(_err);
    }
}
exports.loginPage = loginPage;
