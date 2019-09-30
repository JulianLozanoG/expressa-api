"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require('body-parser');
// const { body, validationResult } = require('express-validator');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3000);
// Endpoint para /test
// app.post("/test",statusController.test);
app.post('/test', (req, res) => {
    let body = req.body;
    const errors = " ";
    if (errors != " ") {
        return res.status(422).json({
            response: {
                data: "",
                errors: "['invalid_data_format']"
            }
        });
    }
    else {
        function sumar(req) {
            console.log('Entro a sumar');
            let cont = 0;
            let acum = 0;
            for (let i = body[cont]; i <= (body.length); i++) {
                acum = acum + i;
                cont++;
            }
            return acum;
        }
        let resultadoSuma = sumar(body);
        console.log('Request ' + body);
        res.json({
            response: {
                data: {
                    suma: resultadoSuma
                },
                errors: "[]"
            }
        });
    }
});
exports.default = app;
//# sourceMappingURL=app-old.js.map