/**
 * Crear una archivo con el nombre ej03.js
 * de la siguiente entrada (1) obtener (2)
 */

//1
let data = [ 1, 2, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7, 8, 3, 1, 2, 4, 2, 3, 4, 1, 2, 4 ];
//2
let result = {
    1: 5,
    2: 6,
    3: 4,
    4: 6,
    //..
};

json = {}

function output (data){
    data.forEach(element => {
        !json[element] ? json[element] = 1 : json[element]++
    });
    console.log(json)
}

output(data)