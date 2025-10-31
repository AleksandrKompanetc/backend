"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3003;
app.get('/', (req, res) => {
    const a = 8;
    if (a > 5) {
        res.send('OK');
    }
    else {
        res.send('Not OK');
    }
    // res.send('Hello world!!!!!!!!');
});
app.get('/samurais', (req, res) => {
    res.send('Samurais!!!!!!!!!!');
});
app.get('/about', (req, res) => {
    res.send('About us page');
});
app.post('/samurais', (req, res) => {
    res.send('We have created a new samurai!');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map