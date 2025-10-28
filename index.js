"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3021;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/about', function (req, res) {
    res.send('About Page');
});
app.get('/samur', function (req, res) {
    res.send('Hello samurai, Sasha-Aleksandr!!!');
});
app.get('/samurais', function (req, res) {
    res.send('Hello samurai, Sasha!');
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
