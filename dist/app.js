"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Para procesar peticiones x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Para procesar peticiones application/json
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3000);
app.get('/test', (req, res) => {
    let validaJson = Number.isNaN(req.body.numeros);
    console.log(validaJson);
    let numeros = req.body.numeros;
    console.log(numeros);
    //Funciones de sumar, restar, multiplicar y dividir
    function sumar(numeros) {
        //console.log('Entro a sumar con los numeros '+numeros);
        let total = numeros.reduce((x, r) => r += x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function restar(numeros) {
        //console.log('Entro a restar con los numeros '+numeros);
        let total = numeros.reduce((x, r) => r -= x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function multiplicar(numeros) {
        //console.log('Entro a multiplicar con los numeros '+numeros);
        let total = numeros.reduce((x, r) => r *= x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function dividir(numeros) {
        //console.log('Entro a dividir con los numeros '+numeros);
        let total = numeros.reduce((x, r) => r /= x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    if (validaJson == true) {
        res.status(422).json({
            response: {
                data: "",
                errors: "['invalid_data_format']"
            }
        });
    }
    else {
        res.json({
            Response: {
                data: {
                    suma: sumar(numeros),
                    resta: restar(numeros),
                    multiplicacion: multiplicar(numeros),
                    division: dividir(numeros)
                },
                errors: "[]"
            }
        });
    }
});
exports.default = app;
//# sourceMappingURL=app.js.map