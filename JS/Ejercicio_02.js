//TIPOS DE DATOS EN JS
//1. Undefined - (NULL)

console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente="Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cleitne = 19227
console.log(`El Cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

//console.log(`El cliente ha realizado ${NumCompras} en este mes.`);
//Undefined es el tipo de dato por defecto se asigna a variables no inicializadas o no declaradas

//2. BOOLEAN - BOLEANOS - TRUE/FALSE  (FALSO/VERADERO)

console.warn("--- Tipo de Dato : BOOLEAN (Bolean - True/False)")
let esPremiun = "No lo se";
console.log(`¿Es el cliente premiun? : ${esPremiun}`)
console.log(`El tipo de dato de la variable esPremiun es: ${typeof(esPremiun)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremiun="true"
console.log(`El tipo de dato de la varible esPremiun es: ${typeof(esPremiun)}`);
console.log("Asignando el valor true a la variable.")

esPremiun =true 
console.log(`El tipo de dato de la variable es Premiun es: ${typeof(esPremiun)}`);
console.log(`¿Es el cliente Premiun?: ${typeof(esPremiun)}`);
console.log("Cambiando el valor de esPremiun a false")
esPremiun=0;

if(esPremiun)
    console.log("El cliente pago por usar el servicio.");
else
console.log("El cliente recibe los servicios gratuitos");

//3. NUMBER (Números)

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producrto que has seleccionado cuesta: ${costo_producto}`)
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos.`)
console.log(`El importe total de la compra es: ${(cantidad*costo_producto)}`)
saldo_cuenta= saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);

//El cliente realiza un abono de 1500

monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha recibido, tu nuevo saldo de: ${(saldo_cuenta+monto_transaccion)}`);

//4. SRING (CADENA DE CARACTÈRES)

const alumno = "Idai Vargas Galindo"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractères)");
console.log(`El nombre del alumno es: ${alumno} que es un tipo de dato ${typeof(alumno)}`);

//INICIALIZAMOS EL VALOR DE LA VARIABLE producto

producto = "MONITOR 20\"FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

//MANIPULANDO LOS STRINGS

console.log(`Màs adelante podremos transformar el contenido de los STRING usando los mètodos y funciones especìficas, còmo convertir su valor a mayùsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O su defecto a minùsculas: ${producto} => ${producto.toLowerCase()}`);

//5. BIGINT (Nùmero de Mayor Amplitud)

console.warn("--- Tipo de Dato - BIGINT (Nùmero Amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 1234567890123456789012345678901234567890
console.log(`El primer experimento da un nùmero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento da un nùmero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento da un nùmero grande es: ${numeroGrande3}, que NO es soportado por NUMBER, Perdiendo Presiciòn, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento da un nùmero grande es: ${numeroGrande4}, que NO es soportado por NUMBER, Perdiendo Presiciòn, y su tipo de dato es: ${typeof(numeroGrande4)}`)

numeroGrande3=BigInt("123456789012345678901234567890");
console.log(`El quinto experimento da un nùmero grande es: ${numeroGrande3}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`)
numeroGrande4=BigInt("1234567890123456789012345678901234567890");
console.log(`El sexto experimento da un nùmero grande es: ${numeroGrande4}, que ya fue convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// ¿Se puede realizar operaciones matemàticas entre un NUMBER y un BIGINT?

const numero=123;
console.log(`Intentando realizar la suma de: numero + numeroGrande3, el resultado es: ${BigInt(numero)+ numeroGrande3}`)

//6. SYMBOL (Sìmbol)
console.warn("--- Tipo de Dato SYMBOL (Sìmbolo o ùnico)")
const numero1 =5;
const numero2=5.0;
const numero3="5";
const numero4="5.0"
const numero5=Symbol(5)
const numero6=Symbol(5)
const numero7=Symbol(5.0)
const numero8=Symbol("5")
const numero9=Symbol("5.0")


//Pruebas comparativas
//1
console.log("¿Es 5 = 5.0?")
if(numero1==numero2)
    console.log("Se comparò nùmero1 con nùmero2, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero2, determinando que NO tienen el mismo valor.")

//2
console.log("¿Es 5 = \"5\"?")
if(numero1==numero3)
    console.log("Se comparò nùmero1 con nùmero3, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero3, determinando que NO tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5.0\"?")
if(numero1===numero3)//Estrictamente igual (equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparò nùmero1 con nùmero3, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero3, determinando que tienen el mismo valor, pero No el mismo tipo de DATO.")

//4
console.log("¿Es 5 = \"5.0\"?")
if(numero1==numero4)
    console.log("Se comparò nùmero1 con nùmero4, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero4, determinando que NO tienen el mismo valor.")

//5
console.log("¿Es 5 === \"5.0\"?")
if(numero1===numero4)//Estrictamente igual (equidad)= Mismo valor, mismo tipo de dato
    console.log("Se comparò nùmero1 con nùmero4, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero4, determinando que tienen el mismo valor, pero No el mismo tipo de DATO.")

//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que el tipo de dato son: siendo numero1 del tipo: ${numero1} y numero5 del tipo: ${typeof(numero5)} `)
if(numero1==numero5)
    console.log("Se comparò nùmero1 con nùmero5, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero5, determinando que NO tienen el mismo valor.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que el tipo de dato son: siendo numero1 del tipo: ${numero1} y numero7 del tipo: ${typeof(numero7)} `)
if(numero1===numero7)
    console.log("Se comparò nùmero1 con nùmero7, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero7, determinando que tienen el mismo valor, pero No el mismo tipo de dato.")

//8
console.log(`¿Es 5 === Symbol("5")?, antes de compararlos analizamos que el tipo de dato son: siendo numero1 del tipo: ${numero1} y numero8 del tipo: ${typeof(numero8)} `)
if(numero1==numero8)
    console.log("Se comparò nùmero1 con nùmero8, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero8, determinando que tienen el mismo valor, pero No el mismo tipo de dato.")

//9
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que el tipo de dato son: siendo numero1 del tipo: ${numero1} y numero9 del tipo: ${typeof(numero9)} `)
if(numero1==numero9)
    console.log("Se comparò nùmero1 con nùmero9, determinando que tiene el mismo valor")
else
console.log("Se comparò numero1 con numero9, determinando que tienen el mismo valor, pero No el mismo tipo de dato.")

//10
console.log(`¿Es Symbol(5) = Symbol(5)?, antes de compararlos analizamos que el tipo de dato son: siendo numero1 del tipo: ${typeof(numero5)} y numero5 del tipo: ${typeof(numero6)}`)
if(numero5===numero6)
    console.log("Se comparò nùmero5 con nùmero6, determinando que tiene el mismo valor")
else
console.log("Se comparò numero5 con numero6, determinando que tienen el mismo valor, y el mismo tipo de dato, es la condición de Symbol la que lo hace unico en la memoria.")


//7. NULL

console.warn("--- Tipo de Dato - NULL (Nulo o Vacío)");
//El tipo de dato nulo se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacío, bajando su consentimiento, a diferencia de UNDEFINED que es un valor desconocido asignado por DEFAULT por JS.


let nombreUsuario = null;
let passUsuario = null;
let generoUsuario = null;
let estatusRelacionSentimental = null;
let fecha_ultimoPost;


//Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.

//Si el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicación web, puede explorar contenido de acceso publico. Y no existira información para mostrar.

//En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su número telefónico o correo electrónico y una contraseña que debemos guardar en las variables previamente declaradas.

//Supongamos que el usuario: Idai Vargas Galindo, con correo electrónico 230574@utxicotepec.edu.mx desea ingresar con su contraseña: pass1234

nombreUsuario = "230574@utxicotepec.edu.mx";
passUsuario = "pass1234";

//En este momento de ejecución del sistema no sabemos su género, ni su estatus de relación sentimental.

console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña de: ${passUsuario}`);

//Lo que prosigue es que el sistema cotejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.

//Dado que Idai es del Genero Femenino, y denota que su estatus de relación no ha sido capturado o lo mantiene en privado esto genera la actualización de los valores de las variables.
generoUsuario = "F"
estatusRelacionSentimental = null

console.log(`El usuario: ${nombreUsuario}, se ha loeado existosamente, al tener acceso a su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de realación es: ${estatusRelacionSentimental} y su ultima publicación la realizó el: ${fecha_ultimoPost}`);

//comparando NULL vs UNDEFINED
//Si bien UNDEFINED y NULL tienen el mismo valor, no tienen el mismo tipo de datos

console.log("Comparación de la equidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tiene el mismo valor":
    "Las variables no tiene el mismo valor"
);
console.log("Comparación de la identidad entre Undefined y Null:")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tiene el mismo valor y el mismo tipo de dato":
    "Las variables tiene el mismo calor, pero no el mismo tipo de dato"
);

// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función")
//Declaramos una funnción que nos permita recibir un parametro, en este casó el nombre de la persona a saludar, y le enviamos un saludo, esta función le asignamos una cosntante.
const saludar = function(nombre){return `Hola, ${nombre}!`}

//Invocamos la función declarada
console.log(saludar('Idai'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)