"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.arcadeFirstLoginPage = void 0;
const axios_1 = __importDefault(require("axios"));
const apiURL = process.env.APIURL || "http://localhost:3001";
function arcadeFirstLoginPage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Página de Login de Administrador de Arcade");
            const arcadeTempId = req.params.arcadeTempId;
            res.render("login", {
                arcadeData: undefined,
                tempId: arcadeTempId,
                apiURL: apiURL,
            });
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error) && error.response) {
                // Captura o código de status e a mensagem de erro
                const statusCode = error.response.status; // Ex: 404
                const statusText = error.response.statusText; // Ex: "Not Found"
                // Renderiza a página de erro com as informações do erro
                res.render("error", {
                    message: `Erro ${statusCode}: ${statusText}`,
                });
            }
            else {
                // Para outros tipos de erro (como problemas de rede)
                console.error("Erro inesperado:", error.message);
                res.render("error", {
                    message: "Erro inesperado",
                });
            }
        }
    });
}
exports.arcadeFirstLoginPage = arcadeFirstLoginPage;
