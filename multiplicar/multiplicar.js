const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limit = 10) => {

    console.log(`===================================`.green);
    console.log(`======== TABLA DEL ${base}==============`.cyan);
    console.log(`===================================`.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} x ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}