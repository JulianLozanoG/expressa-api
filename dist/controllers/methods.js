"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumar(req) {
    console.log('Entro a sumar');
    var acum = 0;
    for (let i = req.body[0]; i <= (req.body.length); i++) {
        acum = acum + i;
    }
    return acum;
}
exports.sumar = sumar;
function restar(req) {
    var acum = 0;
    for (let i = req.body[0]; i <= (req.body.length); i++) {
        acum = acum - i;
    }
    return acum;
}
exports.restar = restar;
function multiplicar(req) {
    var acum = 0;
    for (let i = req.body[0]; i <= (req.body.length); i++) {
        acum = acum * i;
    }
    return acum;
}
exports.multiplicar = multiplicar;
function dividir(req) {
    var acum = 0;
    for (let i = req.body[0]; i <= (req.body.length); i++) {
        acum = acum / i;
    }
    return acum;
}
exports.dividir = dividir;
//# sourceMappingURL=methods.js.map