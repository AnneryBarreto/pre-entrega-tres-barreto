function MostrarProductosCarrito() {
    const productos = cargarProductosCarrito();
    let salida = "";

    if (totalProductosCarrito() > 0) {
        salida += `<table class="table">
        <tr>
        <td colspan="5" class="text-end"><button class="btn btn-primary" onclick="vaciarCarrito()">Vaciar Carrito</button></td>
        <tr>`;

        for (producto of productos) {
            salida += `<tr>
            <td><img src="${"images/" + producto.imagen}" alt="${producto.nombre}" width="80" height="100" /></td>
            <td>${producto.nombre}</td>
            <td>${producto.cantidad} X $${producto.precio}</td>
            <td>$${producto.cantidad * producto.precio}</td>
            <td class="text-end"><button class="btn btn-primary" onclick="eliminarProducto(${producto.id});" title="Eliminar Producto"><img src="../img/trash.png" alt="Eliminar Producto" width="30" /></button></td>
            </tr>`;
        }

        salida += `<tr>
        <td colspan="3">Total a Pagar</td>
        <td>$${totalPagarCarrito()}</td>
        <td>&nbsp;</td>
        </tr>`;
        salida += `</table>`;
    } else {
        salida = `<div class="alert alert-danger text-center" role="alert">No se han agregado Productos al Carrito!</div>`
    }

    document.getElementById("productos").innerHTML = salida;
}

MostrarProductosCarrito();
BotonCarrito();