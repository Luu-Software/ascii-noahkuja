import { preguntar } from './lib/consola.ts';

function repetirLetra(letra: string, cantidad: number): string {
  // COMPLETAR
  let resultado : string = "";
  
let vecesrepetido : number = 0;

while (vecesrepetido < cantidad){
  resultado = resultado + letra
  vecesrepetido = vecesrepetido + 1
}
return resultado;
}

let caracter: string = preguntar('¿Con que caracter vas a dibujar el cuadrado? ');
let tamaño: number = Number(preguntar('¿De qué tamaño? '));

let filas : number = 0;



while (filas < tamaño ){
let linea : string = repetirLetra(caracter, tamaño);

console.log (linea);

filas = filas + 1
}
// COMPLETAR
