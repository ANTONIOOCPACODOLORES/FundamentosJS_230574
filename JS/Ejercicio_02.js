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
console.warn("--- Tipo de Dato : BOOLEAN (Bolean - True/False")
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
console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes");
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