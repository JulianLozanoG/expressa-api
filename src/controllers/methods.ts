import { Request } from 'express';

export function sumar(req: Request):number {
    console.log('Entro a sumar');
    var acum = 0;
    for (let i=req.body[0]; i<=(req.body.length); i++){
        acum= acum + i;
    } 
    return acum;
}

export function restar(req: Request):number {
    var acum = 0;
    for (let i=req.body[0]; i<=(req.body.length); i++){
        acum= acum - i;
    } 
    return acum;
}

export function multiplicar(req: Request):number {
    var acum = 0;
    for (let i=req.body[0]; i<=(req.body.length); i++){
        acum= acum * i;
    } 
    return acum;
}

export function dividir(req: Request):number {
    var acum = 0;
    for (let i=req.body[0]; i<=(req.body.length); i++){
        acum= acum / i;
    } 
    return acum;
}