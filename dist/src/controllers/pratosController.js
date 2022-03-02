var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PratosModel from '@models/PratosModel';
export default {
    getAllPratos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield PratosModel.find();
                return res.status(200).json(data);
            }
            catch (error) {
                return res.status(404).send('Pratos não encontrado');
            }
        });
    },
    getPrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield PratosModel.findById(id);
                return res.status(200).json(data);
            }
            catch (error) {
                return res.status(404).send('Prato não encontrado');
            }
        });
    },
    createNewPrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, ingredients, type } = req.body;
                yield PratosModel.create({ name, price, ingredients, type });
                return res.status(201).end();
            }
            catch (error) {
                return res.status(400).send('Nao foi possivel cria um prato');
            }
        });
    },
    deletePrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield PratosModel.findByIdAndDelete(id);
                return res.status(200).send('Prato deletado');
            }
            catch (error) {
                return res.status(404).send('Prato não encontrado');
            }
        });
    },
    updatePrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, price, ingredients } = req.body;
                yield PratosModel.findByIdAndUpdate(id, { name, price, ingredients });
                return res.status(200).end();
            }
            catch (error) {
                return res.status(404).send('Prato não encontrado');
            }
        });
    },
};
