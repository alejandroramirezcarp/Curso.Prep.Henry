// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  const res = [];
  for(let prop in objeto){
    var clave = prop;
    var valor = objeto[prop];
    const par = [];
    par.push(clave);
    par.push(valor);
    res.push(par);
  }
  return res;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  const res = {};
  while(string.length > 0){
    let k = 0;
    let pendiente = [];
    let letra = string[0];
    for (let j = 0; j < string.length; j++){ 
      if(letra === string[j]){
        k++;
      }else{
        pendiente.push(string[j]);
      }
    }
    res[letra] = k;
    string = pendiente;
  }
  return res;
 }


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let mayusculas = "";
  let minusculas = "";
  for (let j = 0; j < s.length; j++){ 
    let letra = s.charAt(j);
    if(letra === letra.toUpperCase() && letra !== letra.toLowerCase()){
      mayusculas = mayusculas + letra;
    }else{
      minusculas = minusculas + letra;
    }
  }
  return mayusculas + minusculas;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let res = "";
  let j = 0;
  let l = 0;
  for(let i = 0; i < str.length; i++){

    if(str.charAt(i) !== " "){
      j++;
    }else{
      for(let k = j; k > l; k--){
        res = res + str.charAt(k-1);
      }
      res = res + " ";
      j++;
      l = j;
    }
  }
  for(let i = str.length; i > l; i--){
    res = res + str.charAt(i-1);
  }
  return res;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let res = "Es capicua";
  let str = numero.toString();
  let resto = str.length % 2;
  let mitad = (str.length - resto) / 2;
  for(let i = 0 ; i < mitad ; i++){
    if(str[i] !== str[str.length-1-i]){
      res = "No es capicua";
      break;
    }
  }
  return res;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let res = "";
  for(let i = 0; i < cadena.length; i++){
    if(cadena[i] !== "a" && cadena[i] !== "b" && cadena[i] !== "c"){
      res = res + cadena[i];
    }
  }
  return res;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  for(let i = 0; i < arr.length - 1; i++){
    let longMin = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j].length < arr[longMin].length ){
        longMin = j;
      }
    }
      let key = arr[i];
      arr[i] = arr[longMin];
      arr[longMin] = key;    
  }
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let res = [];
  for(let i = 0; i < arreglo2.length; i++){
    for(let j = 0; j < arreglo1.length; j++){
      if(arreglo2[i] === arreglo1[j]){
        res.push(arreglo2[i]);
      }
    }
  }
  return res;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

