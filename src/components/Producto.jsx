import React from 'react'

const Producto = ({producto, carrito, setCarrito}) => {
    const {nombre, precio} = producto;
    const seleccionarProducto = (producto) => {
        setCarrito([...carrito, producto]);
    }
    return (
        <div>
            <h1>{nombre}</h1>
            <p>${precio}</p>
            <button
                type="button"
                onClick={ () => seleccionarProducto(producto)}
            >
                Comprar
            </button>
        </div>
    )
}

export default Producto
