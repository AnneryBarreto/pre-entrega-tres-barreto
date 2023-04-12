function MostrarProductos() {
    const peluches = cargarProductosLS();
    let salida = "";
    
    for (producto of productos) {
        salida += `<div class="col-md-4 my-4">
            <div class="card text-center border-0">
                <img src="${"images/" + producto.imagen}" alt="${producto.nombre}" class="card-img-top" height="400" />
                <div class="card-body">
                    <p class="card-text">${producto.nombre}</p>
                    <p><button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id});" title="Agregar Producto">Agregar (+)</button>
                </div>
            </div>
        </div>`;
    }

    document.getElementById("productos").innerHTML = salida;
}

MostrarProductos();
BotonCarrito();