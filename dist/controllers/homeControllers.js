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
exports.homePage = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apiURL = process.env.APIURL || "http://localhost:3001";
function homePage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Carregando a página inicial...");
            console.log("API URL:", apiURL);
            const { data: { content: latestNews }, } = yield axios_1.default.get(apiURL + "/latestNews");
            // Obter Jogos
            const { data: { content: games }, } = yield axios_1.default.get(apiURL + "/game");
            // Obter Maiores Pontuações
            const { data: { content: players }, } = yield axios_1.default.get(apiURL + "/player");
            players.sort((a, b) => b.totalScore - a.totalScore);
            // // Obter saves
            // const {
            //   data: { content: saves },
            // } = await axios.get(apiURL + "/saves");
            // // Obter apenas os últimos saves:
            // saves.sort((a: any, b: any) => b.lastPlayed - a.lastPlayed);
            res.render("home", { latestNews, games, players });
        }
        catch (_err) {
            // if (_err instanceof Error) console.error(_err.message);
            console.error(_err);
            res.status(500).send("Erro ao carregar a página inicial.");
        }
    });
}
exports.homePage = homePage;
