//Repaso de objetos
const bg = "linear-gradient(11deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las salidas de la Consola
console.warn("Practica 05: Repaso de Objetos en Java Script");



//VARIABLES INDEPENDIENTS
console.log("%c1.- Variables Independientes",  style_console);

//Declaramos valores independientes relacionados a un PRODUCTO

let Producto_Nombre = "Computadora Gamer Laptop 17\"";
let Producto_Marca = "ASUS"
let Producto_Modelo = "TUF 17"
let Producto_precio = 15749.50;
let Producto_Disponibilidad = true;
let Producto_SKU = Symbol("TUF707vv-hx221w")
let Producto_Stock = 15;
let Producto_Imagen = null;
let Producto_Barcode;
let Producto_Categorias = ["Electronicos", "Computación", "Gamming","Promociones de buen fin"," Mejor Valorados"];

//Accedemos a los valores de las caracteristicas del producto de manera independiente
console.log(`Los datos del PRODUCTO son: \n
    Nombre: ${Producto_Nombre}, tipo de dato <${typeof(Producto_Nombre)}>
    Marca: ${Producto_Marca}, tipo de dato <${typeof(Producto_Marca)}>
    Modelo: ${Producto_Modelo}, tipo de dato <${typeof(Producto_Modelo)}>
    Precio: ${Producto_precio}, tipo de dato <${typeof(Producto_precio)}>
    Disponibilidad: ${Producto_Disponibilidad}, tipo de dato <${typeof(Producto_Disponibilidad)}>
    Stock: ${Producto_Stock}, tipo de dato <${typeof(Producto_Stock)}>
    Barcode: ${Producto_Barcode}, tipo de dato <${typeof(Producto_Barcode)}>
    Imagen: ${Producto_Imagen}, tipo de dato <${typeof(Producto_Imagen)}>
    Categorias: ${Producto_Categorias}, tipo de dato <${typeof(Producto_Categorias)}>
    `);

    console.log("En el caso del SKU al ser un symbol, no se puede concatenar a la cadena de impresión anterior");
    console.log(Producto_SKU);
    console.log(typeof(Producto_SKU));

//Ahora lo declaramos como un Objeto
console.table();
let Producto = {
    Nombre : "Tenis Deportivos",
    Marca : "Nike",
    Modelo : "Jordan `23",
    Precio : 3361.25,
    Disponibilidad : false,
    Stock : 0,
    SKU : "DZ5475-612",
    Imagen : "../assets/products/sneakers/JORDAN.png",
    Barcode : null,
    Categorias :["Deportes","Juvenil"] 
}

//Ahora leemos el Objeto

console.table(Producto);

//Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer

console.log("Accediendo a propiedades especifícas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad == 0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto.Stock} Unidades disponibles.`);

console.log("%c3.- Destructuración de Objetos", style_console);

let Producto2 ={
    Clave: 312,
    Nombre : "Lentes para Sol",
    Marca : "Oakley",
    Modelo : "QNTM Kato",
    Precio2 : 6829.00,
    Disponibilidad : true,
    Stock : 5,
    SKU : "009481D-0356",
    Imagen : "../assets/products/sunglasses/KatoRed.png",
    Barcode : 888392491626,
    Categorias :["Deportes","Lentes","Hombre","Accesorios"]
}

let Comprador ={
    Clave: 3312,
    Nombre: "Idai",
    Apellido: "Vargas Galindo",
    Tipo: "Frecuente",
    Correo: "Idaivg@gmail.com",
    PaisOrigen: "México",
    Saldo: 15000.00
}


let Pedido ={
    Producto_Clave:3312,
    Comprador_Clave:312,
    Cantidad:2,
    Estatus:"Carrito de Compra"
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
