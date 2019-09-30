"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { validationResult } = require('express-validator');
const methods = require("./methods");
exports.test = (req, res) => {
    try {
        //validationResult(req).throw();
        //Llamado de funciones antes de enviarlas al JSON Response
        let resultadoSuma = methods.sumar(req.body);
        console.log('Etro a validar la funcion');
        let resultadoResta = methods.restar(req.body);
        let resultadoMulti = methods.multiplicar(req.body);
        let resultadoDivision = methods.dividir(req.body);
        res.json({
            response: {
                data: {
                    suma: resultadoSuma,
                    resta: resultadoResta,
                    multiplicacion: resultadoMulti,
                    division: resultadoDivision
                },
                errors: "[]"
            }
        });
    }
    catch (err) {
        //Se muestra error al no enviarse información o no enviar números
        res.status(422).json({
            response: {
                data: "",
                errors: "['invalid_data_format']"
            }
        });
    }
    // res.json({
    //     hola: "hola pues"
    //     });
};
//# sourceMappingURL=status.js.map