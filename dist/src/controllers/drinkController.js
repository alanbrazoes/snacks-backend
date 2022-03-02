var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import DrinkModel from '@models/DrinksModel';
export default {
    createDrink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, price, type } = req.body;
                yield DrinkModel.create({ name, price, type });
                return res.status(201).end();
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
    getAllDrinks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield DrinkModel.find();
                return res.status(200).json(data);
            }
            catch (error) {
                return res.status(404).send(error);
            }
        });
    },
    getDrink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const data = yield DrinkModel.findById(id);
                return res.status(200).json(data);
            }
            catch (error) {
                return res.status(404).send(error);
            }
        });
    },
    deleteDrink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield DrinkModel.findByIdAndDelete(id);
                return res.status(200).end();
            }
            catch (error) {
                return res.status(404).send('Prato não encontrado');
            }
        });
    },
    updateDrink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, price } = req.body;
                yield DrinkModel.findByIdAndUpdate(id, { name, price });
                return res.status(200).send('Ok');
            }
            catch (error) {
                return res.status(404).send('Prato não encontrado');
            }
        });
    },
};
