import { Request, Response } from 'express';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Para procesar peticiones x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// Para procesar peticiones application/json
app.use(bodyParser.json())

app.set("port", (process.env.PORT || 3000));
app.listen( app.get( 'port' ), function() {
    console.log( 'Node server is running on port ' + app.get( 'port' ));
    });
app.get('/test', (req: Request, res: Response) => {

    let validaJson: boolean = Number.isNaN(req.body.numeros);
    console.log(validaJson);
    
    let numeros: Array<number> = req.body.numeros;
    console.log(numeros);

    //Funciones de sumar, restar, multiplicar y dividir
    
    function sumar(numeros: Array<number>):number{
        //console.log('Entro a sumar con los numeros '+numeros);
        let total:number = numeros.reduce((x, r) => r += x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function restar(numeros: Array<number>):number{
        //console.log('Entro a restar con los numeros '+numeros);
        let total:number = numeros.reduce((x, r) => r -= x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function multiplicar(numeros: Array<number>):number{
        //console.log('Entro a multiplicar con los numeros '+numeros);
        let total:number = numeros.reduce((x, r) => r *= x);
        //console.log(' TOTAL: ' + total);
        return total;
    }
    function dividir(numeros: Array<number>):number{
        //console.log('Entro a dividir con los numeros '+numeros);
        let total:number = numeros.reduce((x, r) => r /= x);
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
    } else {
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

export default app;