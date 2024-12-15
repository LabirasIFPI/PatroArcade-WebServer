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
exports.profilePage = void 0;
const axios_1 = __importDefault(require("axios"));
const apiURL = process.env.APIURL || "http://localhost:3001";
function profilePage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Carregando a página de perfil...");
            // Obter dados do jogador:
            const { data: { content: playerData }, } = yield axios_1.default.get(apiURL + "/player/" + req.params.playerId);
            // Obter IDs dos jogos jogados:
            const gameIds = playerData.saveDatas.map((save) => save.gameId);
            // Obter informações dos jogos jogados:
            const gameInfoPromises = gameIds.map((gameId) => axios_1.default.get(`${apiURL}/game/${gameId}`));
            const gameInfosResponses = yield Promise.all(gameInfoPromises);
            const gameInfos = gameInfosResponses.map((response) => response.data.content);
            res.render("profile", { playerData, gameInfos });
        }
        catch (_err) {
            console.error(_err);
            res.status(500).send("Erro ao carregar a página de perfil.");
        }
    });
}
exports.profilePage = profilePage;
