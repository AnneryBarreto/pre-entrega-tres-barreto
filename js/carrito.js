function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function cargarProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    MostrarProductosCarrito();
    BotonCarrito();
}

function estaEnElCarrito(id) {
    const carrito = cargarProductosCarrito();
    return carrito.some(item => item.id === id);
}

function agregarAlCarrito(id) {
    const carrito = cargarProductosCarrito();
    if (estaEnElCarrito(id)) {
        let pos = carrito.findIndex(item => item.id === id);
        carrito[pos].cantidad += 1;
    } else {
        const producto = buscarProducto(id);
        producto.cantidad = 1;
        carrito.push(producto);
    }
    guardarProductosCarrito(carrito);
    BotonCarrito();    
}

function eliminarProducto(id) {
    const carrito = cargarProductosCarrito();
    const productos = carrito.filter(item => item.id !== id);
    guardarProductosCarrito(productos);
    MostrarProductosCarrito();
    BotonCarrito();
}

function buscarProducto(id) { //5
    const productos = cargarProductosLS();
    return productos.find(item => item.id === id); 
}

function totalProductosCarrito() {
    const productos = cargarProductosCarrito();
    return productos.reduce((total, item) => total += item.cantidad, 0);
}

function totalPagarCarrito() {
    const productos = cargarProductosCarrito();
    return productos.reduce((total, item) => total += item.cantidad * item.precio, 0);
}

function BotonCarrito() {
    document.getElementById("carrito").innerText = totalProductosCarrito();
}