const productos = [
    {id:1, nombre:"Bulbasaur", precio:25, imagen:"../img/bulbasaur.jpg", categoria:"peluches"},
    {id:2, nombre:"Charmander", precio:25, imagen:"../img/charmander.jpg", categoria:"peluches"},
    {id:3, nombre:"Squirtle", precio:25, imagen:"../img/squirtle.jpg", categoria:"peluches"},
    {id:4, nombre:"Agumon", precio:5, imagen:"../img/agumon.jpg", categoria:"llavero"},
    {id:5, nombre:"Gabumon", precio:5, imagen:"../img/gabumon.jpg", categoria:"llavero"},
    {id:6, nombre:"Biyomon", precio:5, imagen:"../img/biyomon.jpg", categoria:"llavero"},
];

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);