//Repaso de objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las salidas de la Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");



//VARIABLES INDEPENDIENTS
console.log("%c1.- Variables Independientes",  style_console);

//Declaramos valores independientes relacionados a un PRODUCTO

let Producto_Nombre="Computadora Gammer Laptop 17\"";
let Producto_Marca="ASUS";
let Producto_Modelo= "TUF 17";
let Producto_Precio= 15749.50;
let Producto_Disponibilidad=" true";
let Producto_SKU=Symbol("TUF707VV-HX221W");
let Producto_Stock= 15;
let Producto_Imagen=null;
let Producto_Barcode;
let Producto_Categorias= ["Electronicos", "Computación","Gamming","Promoción Buen Fin","Mejor Valorados"];


//Accedemos a los valores de las caracteristicas del producto de manera independiente 

console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre},Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca},Tipo de Dato <${typeof(Producto_Modelo)}>
    Modelo: ${Producto_Modelo},Tipo de Dato <${typeof(Producto_Marca)}>
    Precio: ${Producto_Precio},Tipo de Dato <${typeof(Producto_Precio)}>
    Disponibilidad: ${Producto_Disponibilidad},Tipo de Dato <${typeof(Producto_Disponibilidad)}>
    Stock:${Producto_Stock},Tipo de Dato <${typeof(Producto_Stock)}> 
    Barcode: ${Producto_Barcode},Tipo de Dato <${typeof(Producto_Barcode)}>
    Imagen:${Producto_Imagen},Tipo de Dato <${typeof(Producto_Imagen)}>
    Categorias:${Producto_Categorias},Tipo de Dato <${typeof(Producto_Categorias)}>`);

    console.log("En el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));


// Ahora lo declaramos como un OBJETO
console.log("%c2.- Objetos",  style_console);
let Producto =
{
    ID: 3216,
    Nombre:"Tenis Deportivos",
    Marca:"Nike",
    Modelo:"Jordan `24",
    Precio:"3361.25",
    Disponibilidad: false,
    Stock:0,
    SKU:"DZ5485-612",
    Imagen:"../assets/products/sneakers/Jordan.png",
    Barcode:null,
    Categorias:["Deportes", "Juvenil"]
}

//Ahora leemos el Objeto

console.table(Producto);

// Para acceder a las prioridades del objeto utilizamos un "." y el nombre de la propiedad a leer
console.log("Accediendo a prioridades especificas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.precio}`)
if(Producto.Disponibilidad==0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} unidades disponibles`)

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 =
{
    Clave:3312,
    Nombre:"Lentes para Sol",
    Marca:"Oakley",
    Modelo:"QNTM Kato",
    precio2:"6829.00",
    Disponibilidad: true,
    Stock:5,
    SKU:"00948D-0356",
    Imagen:"../assets/products/sunglasses/KatoRed.png",
    Barcode:888392491626,
    Categorias:["Deportes", "Lentes" , "Hombre" , "Accesorios"] 
}

let Comprador ={
    Clave:455,
    Tipo:"Frecuente",
    Nombre:"idai",
    Apellidos:"Vargas Galindo",
    Correo:"idaivg@gmail.com",
    PaisOrigen:"Mexico",
    saldoActual:14000.00
}

let Pedido ={
    ID:5816,
    Producto_Clave:3312,
    Comprador_Clave:455,
    Cantidad:2,
    Estatus:"Carrito de Compra",
    TipoPago: "Tarjeta de Crédito"
}

//En Base a los 3 objetos necesitamos  el costo de la compra y si le alcanza con sus saldo a favor
let {Producto_Precio: Precio2}=Producto2;
let {Cantidad:Pedido_Cantidad}=Pedido;
let {saldoActual:Cliente_SaldoActual} = Comprador;
let Costo_Compra =Producto_Precio * Pedido_Cantidad;

console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de: ${Costo_Compra} `)

if(Costo_Compra<Cliente_SaldoActual)
    console.log("El cliente tiene saldo suficiente ")
else 
 console.log("No cuenta con saldo suficiente")
//Actualizar el valor de los objetos
 
 console.log("%c4.- Actualización de los valores de las propiedades de un objeto", style_console);

 console.log("El objeto actualmente tiene los siguientes valores")
 console.log(JSON.stringify(Producto2,null,2));
 //Convierte el objeto a una cadena para evitar problemas con la referencia
 console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a 46,915.50`)
 //Para codificar basta con igualar el nuevo valor de la propiedad deseada
 Producto2.precio=6915.50;
 console.log(`Los nuevos valores del Producto Son: `)
 console.log(Producto2);

 //¿Puedo cambiar eno solo el valor sino el tipo de dato de un objeto en JavaScript?
 console.log(`-------------------------------------------------------`)
 console.log("El objeto actualmente tiene los siguientes valores")
 let tipoDisponibilidad= typeof(Producto2.Disponibilidad)
 console.log(`El tipo de dato de la Disponibilidad es: ${tipoDisponibilidad}`)
 console.log(JSON.stringify(Producto2,null,2)); //DISPONIBILIDAD BOOLEANO
 Producto2.Disponibilidad="SÍ";
 let nuevoTipoDisponibilidad = typeof(Producto2.Disponibilidad)
 console.log(Producto2);
 console.log(`El nuevo tipo de la disponibilidad es : ${nuevoTipoDisponibilidad}`)

 //Agregar nuevas propiedades al objeto
 console.log("%c5.- Agregar nuevas propiedades al Objeto", style_console);
 //Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
 console.log("Los datos actuales del Comprador son: ")
 console.table(Comprador)
 Comprador[`Direccion`] = "Av. Benito Juárez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
 Comprador[`Tipo`] = "Nuevo cliente"
 Comprador[`ActividadReciente`] = true
 Comprador[ `TotalCompras`] = 3316.25
 console.log("Después de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras...")
 console.table(Comprador);

 //Eliminar propiedades existentes de un Objeto
 console.log("%c6.- Eliminar Propiedades Existentes de un Objeto", style_console);
 console.log("La estructura y valores del objeto PEDIDO son previos a la modificación: ")
 console.table(Pedido)
 delete Pedido.TipoPago
 console.log("Después de la modificación...")
 console.table(Pedido);

 //
 console.log("%c7.- Mètodos para controlar la mutabilidad de los objetos, congelaciòn (FREEZE)", style_console);
 //Si deseamos no permitir que los objetos sean modificados ni en estructura, ni en valor, utilizaremos el mètodo FREEZE (congelar)
 console.log(`La estructura actual del objeto COMPRADOR es: `)
 console.table(Comprador) 
 Object.freeze(Comprador)
 //Intentamos agregar, eliminar o modificar los valores de sus propiedades
 Comprador.fechaUltimaCompra = "05/09/2024 10:15:25"
 delete Comprador.Tipo;
 Comprador.Direcciòn = "Calle 16 de Septiembre #102, col. Manantiales, Huauchinango, Puebla, Mèxico";
 console.log(`Verifciamos si se realizaron los cambios en el Objeto COMPRADOR:`)
 console.table(Comprador)

 console.log("%c8.- Mètodos para controlar la mutabilidad de los Objetos, sellado (SEAL)", style_console);
 //Sin embargo, en el caso que deseamos poder modificar los valores de las propiedades del objeto, pero no su estructura, usaremos SEAL
 console.log("Objeto antes de ser modificado: ")
 console.table(Pedido)
 //Sellamos el objeto
 Object.seal(Pedido)
 //Intentamos modificar su estructura
 Pedido['FechaPedido'] = "25/09/2024 11:05:03"
 delete Pedido['Cantidad']
 console.log('Verificamos su se realizaron los cambios en el objeto PEDIDO: ')
 console.table(Pedido)
 //Ahora intentamos modificar el valor de las propiedades
 Pedido.Cantidad = 5
 console.log('Verificamos si se realizaron los cambios en el Objeto PEDIDO: ')
 console.table(Pedido)

 console.log("%c9.- Destructuraciòn de 2 o màs Objetos", style_console);

 let {Precio: ProductoPrecio, Marca: ProductoMarca}=Producto
 let {Correo: clienteCorreo, PaisOrigen: clientePais, saldoActual: clienteSaldo, Tipo: clienteTipo} = Comprador
 // Transformar valores cuantitativos en cualitativos
 if(ProductoPrecio>2000)
    ProductoPrecio = "Caro"
else
ProductoPrecio= "Barato"

if(clienteSaldo >0)
    clienteSaldo= "A favor"
else if(clienteSaldo<0)
    clienteSaldo="En contra"
else
clienteSaldo="Sin deuda"
//Transformar valores cualitativos en cuantitativos

let clienteNievel;
if(clienteTipo=="Premiun")
    clienteNievel=1
if (clienteTipo=="Freemiun")
    clienteNievel=2
if(clienteTipo=="No identificado")
    clienteNievel=3

//Clasificamos al cliente por su Paìs de Origen
if(clientePais == "Mexico")
    clientePais="Nacional"
else
clientePais="Extranjero"


//OLE -Object Literal Enhacement

let datosClientePromociones = {clienteCorreo, clientePais, clienteNievel, clienteSaldo, ProductoMarca, ProductoPrecio}

//El nuevo objeto que creamos serìa un ejemplo de la informaciòn que enviariamos al àrea de Marketing para la difusiòn de promociones
console.log("Los daros del cliente y sus hàbitos de compra son: ")
console.table(datosClientePromociones)

console.log("%c10.- Uniòn de objetos usando el mètodo de asignaciòn (ASSING)", style_console);

console.log("imprimimos la estructura y valores del Objeto PRODUCTO")
console.table(Producto);
console.log("imprimimos la estructura y valores del Objeto PEDIDO")
console.table(Pedido);
//Suponiendo que el usuario ya los realizò el pago del pedido se convertira en una VENTA que requiere informaciòn de ambos objetos
const Venta = Object.assign(Producto, Pedido);
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta);
 //Para que se vean ambos Id se debe agregar otra funcion 












 /*let persona={nombre: "Idai", edad: "24", email: "ida@gmail.com"};
 persona.edad= 24;
 console.log(persona);
 console.log("Objeto antes de ser modificado: ")
 console.table(persona)
 //Sellamos el objeto
 Object(persona)
 //Intentamos modificar su estructura
 persona['Fecha'] = "26/09/2024 11:05:03"
 delete persona['email']
 console.log('Verificamos su se realizaron los cambios en el objeto Persona: ')
 console.table(persona)
 //Ahora intentamos modificar el valor de las propiedades
 persona.email = "Isai@outlook.com"
 console.log('Verificamos si se realizaron los cambios en el Objeto Persona: ')
 console.table(persona)*/