// testeCalculadora/src/testaCalculadora.ts
import { Somador, Subtrator, Divisor, Multiplicador } from 'calculadora';
const somador = new Somador();
const subtrator = new Subtrator();
const divisor = new Divisor();
const multiplicador = new Multiplicador();
console.log("Soma: ", somador.calcular(10, 5)); // 15
console.log("Subtração: ", subtrator.calcular(10, 5)); // 5
console.log("Divisão: ", divisor.calcular(10, 2)); // 5
console.log("Multiplicação: ", multiplicador.calcular(10, 3)); // 30
