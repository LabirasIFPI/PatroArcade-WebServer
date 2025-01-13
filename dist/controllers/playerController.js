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
exports.playerPage = void 0;
const axios_1 = __importDefault(require("axios"));
const apiURL = process.env.APIURL || "http://localhost:3001";
function playerPage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Carregando a página de perfil...");
            // Obter dados do jogador: (playerData)
            const { data: { content: playerData }, } = yield axios_1.default.get(apiURL + "/player/" + req.params.playerId);
            // Obter jogos que o player jogou: (saves)
            const { data: { content: saves }, } = yield axios_1.default.get(apiURL + "/player/" + req.params.playerId + "/saves");
            saves.sort((a, b) => b.lastPlayed - a.lastPlayed);
            // Obter informações dos jogos:
            const gameInfos = yield Promise.all(saves.map((save) => __awaiter(this, void 0, void 0, function* () {
                const { data: { content: gameInfo }, } = yield axios_1.default.get(apiURL + "/game/" + save.gameId);
                return gameInfo;
            })));
            res.render("player", { playerData, gameInfos, saves });
        }
        catch (_err) {
            console.error(_err);
            res.status(500).send("Erro ao carregar a página de perfil.");
        }
    });
}
exports.playerPage = playerPage;
