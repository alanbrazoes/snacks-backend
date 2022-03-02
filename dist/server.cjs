'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
require('dotenv/config');
const mongoose_1 = __importDefault(require('mongoose'));
const cors_1 = __importDefault(require('cors'));
const path_1 = __importDefault(require('path'));
const index_routes_1 = __importDefault(require('./modules/index.routes.cjs'));
import helmet from 'helmet';
import csrf from 'csurf';
const app = (0, express_1.default)();
mongoose_1.default
  .connect(process.env.URLSERVER)
  .then(() => app.emit('ok'))
  .catch((e) => app.emit(e));
app.use((0, cors_1.default)());
app.use(helmet());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../public')));
app.use(csrf());
app.use(index_routes_1.default);
app.on('ok', () => {
  app.listen(process.env.PORT || process.env.LISTEN);
});
