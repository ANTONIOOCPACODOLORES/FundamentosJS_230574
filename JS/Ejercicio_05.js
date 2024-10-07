//Repaso de Ciclos y Sentencias de Control

//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(199,10,36,1) 0%, rgba(129,25,26,1) 33%, rgba(201,10,26,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalizacion de salida de consola
console.warn("Practica 07: Arreglos en Java Script");


console.log("%c1.- Si/Entonces ... (IF)",  style_console);
//Le indica al programa que hacer o que no hacer en base a una prueba de lógica de verdadero o falso 
let fechaActual = new Date();
console.log(`Hola, la fecha de hoy es: ${fechaActual.toString()}`);

//¡Y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleString('es-MX',
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    }
);
console.log(`En formato local (México): ${fechaLocalMX}`);

//Si es antes de las doce saluda con un "Buenos días"

if(fechaActual.getHours()<12)//Si solo tiene una instrucción no es necesario colocar llaves
    console.log(`Buenos días, hoy es: ${fechaLocalMX}`);

    //Existe unextensor de la sentencia if(sí) que es else (en caso contrario)
    if(fechaActual.getMonth()<=6)
        console.log(`Estas en la primera mitad del año.`);
    else
    console.log(`Estas en la segunda mitad del año.`)


// Que pasa si la validación tiene varias operaciones

const anio = fechaActual.getFullYear();
let inicioPrimavera = new Date(anio,2,21);
let inicioVerano = new Date(anio,5,21);
let inicioOtonio = new Date(anio,8,23);
let inicioInvierno = new Date(anio,11,21);

let horarioVerano=false;
if(fechaActual >=inicioPrimavera || fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
}




