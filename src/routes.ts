import { Router } from "express";
import JogadorController from "./app/controllers/JogadorController";
import AuthController from "./app/controllers/AuthController";
import EnderecoController from './app/controllers/EnderecoController';
import PatenteController  from "./app/controllers/PatenteController";
import CompraController from "./app/controllers/CompraController";
//import ArtefatoController from "./app/controllers/ArtefatoController";
import MatchController from "./app/controllers/PartidaController";
import ObjetivoController from "./app/controllers/ObjectiveController";
import RoundController from "./app/controllers/RoundController";
import ResultadoController from "./app/controllers/ResultadoController";
import MapaController from "./app/controllers/MapaController";
import LocalController from "./app/controllers/LocalController";
import CompraItensController from "./app/controllers/CompraItensController";
import MunicaoController from "./app/controllers/MunicaoController";
import ArmaController from "./app/controllers/ArmaController";

const router = Router();

router.post('/jogador/store', JogadorController.store);
router.post('/jogador/update', JogadorController.update);
router.post('/jogador/delete', JogadorController.delete);
router.post('/jogador/list', JogadorController.list);

router.post('/auth', AuthController.authenticate);

router.post('/endereco/store', EnderecoController.store);
router.post('/endereco/list', EnderecoController.list);
router.post('/endereco/delete', EnderecoController.delete);
router.post('/endereco/find', EnderecoController.find)

router.post('/patente/store', PatenteController.store);
router.post('/patente/list', PatenteController.list);

router.post('/compra/store', CompraController.store);
router.post('/compra/list', CompraController.list);

router.post('/arma/store', ArmaController.store);
router.post('/arma/list', ArmaController.list);
router.post('/arma/delete', ArmaController.delete);

router.post('/municao/store', MunicaoController.store);
router.post('/municao/list', MunicaoController.list);
router.post('/municao/delete', MunicaoController.delete);

router.post('/match/store', MatchController.store);
router.post('/match/list', MatchController.list);

router.post('/objetivo/store', ObjetivoController.store);
router.post('/objetivo/list', ObjetivoController.list);

router.post('/round/store', RoundController.store);
router.post('/round/list', RoundController.list);

router.post('/resultado/store', ResultadoController.store);
router.post('/router/list', ResultadoController.list);

router.post('/mapa/store', MapaController.store);
router.post('/mapa/list', MapaController.list);

router.post('/local/store', LocalController.store);
router.post('/local/list', LocalController.list);

router.post('/compraitens/store', CompraItensController.store);
router.post('/compraitens/list', CompraItensController.list);

export default router;
