alert(`
Lista de Nuestros Productos
Hamburguesas
id: 1, Nombre: "Hamburguesa Simple", precio: 1500
id: 2, Nombre: "Hamburguesa Doble", precio:1700
id: 3, Nombre: "Hmaburguesa Triple", precio: 1900
Bebidas
id: 4, Nombre: "Coca-cola", precio: 200
id: 5, Nombre: "Pepsi", precio: 190
id: 6, Nombre: "7up", precio: 195
Papas fritas
id: 7, Nombre: "Papas Pequenas", precio: 800
id: 8, Nombre: "Papas Medianas", precio: 900
id: 9, Nombre: "Papas Grandes", precio: 1000`)

let productos = [
    //Hamburguesas
    {id: 1, Nombre: "Hamburguesa Simple", precio: 1500},
    {id: 2, Nombre: "Hamburguesa Doble", precio:1700},
    {id: 3, Nombre: "Hmaburguesa Triple", precio: 1900},
    //Bebidas
    {id: 4, Nombre: "Coca-cola", precio: 200},
    {id: 5, Nombre: "Pepsi", precio: 190},
    {id: 6, Nombre: "7up", precio: 195},
    //Papas fritas
    {id: 7, Nombre: "Papas Pequenas", precio: 800},
    {id: 8, Nombre: "Papas Medianas", precio: 900},
    {id: 9, Nombre: "Papas Grandes", precio: 1000},
];
function pagoTotal () {

    let valorTotal = 0

    let codProductos = prompt("introduce los ids de los productos que deseas separados por una coma(,)");

    let idsProductos = codProductos.split(",");

    idsProductos.forEach(id =>{
        let producto = productos.find(p => p.id === parseInt(id));
        if(producto){
            valorTotal += producto.precio;
        }
    })
    alert(`total a pagar es de ${valorTotal}`);
}
pagoTotal();
