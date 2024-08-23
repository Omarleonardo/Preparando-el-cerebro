
// 1. Loop de pares
function loopDePares(num) {
    for (let i = 0; i <= 100; i++) {
        const sumaIteracion = i + num;
        console.log(i)

        if (sumaIteracion % 2 == 0) {
            console.log(`El número ${sumaIteracion} es par`)
        }
    }
}

// 2. Loop de impares con palabra
function loopDeImpares(numero, palabra) {
    for (let i = 1; i <= 100; i++) {
        const sumaIteracion = i + numero;
        console.log(i)

        if (sumaIteracion % 2 != 0) {
            console.log(palabra)
        }
    }
}

// 3. Sumatoria
function sumatoria(numero) {
    let suma = 0;
    for (let num = 1; num <= numero; num++) {
        suma += num
    }
    return suma;
}

// 4. Nuevo arreglo
function nuevoArreglo(numero) {
    let nuevoArray = [];
    for (let num = 1; num <= numero; num++) {
        nuevoArray.push(num)
    }
    return nuevoArray;
}

//5. Similar String.split()
function split(palabra) {
    let word = []
    for (let i = 0; i < palabra.length; i++) {
        word.push(palabra[i])
    }
    return word;
}

//6. Manejando dos arreglos
function arrayHandler(arreglo1, arreglo2) {
    if (arreglo1.length != arreglo2.length) {
        return "Los arreglos deben ser de la misma dimensión";
    }

    for (let i = 0; i <= arreglo1.length; i++) {
        console.log(`Soy ${arreglo1[i]} y yo soy ${arreglo2[i]}`)
    }
}

// 7. Palíndromo
function palindromo(palabra) {
    palabra = palabra.toLowerCase();

    let palabraInvertida = "";

    for (let letter = palabra.length - 1; letter >= 0; letter--) {
        palabraInvertida += palabra[letter];
    }
    if (palabra == palabraInvertida) {
        return true;
    }
    return false;
}