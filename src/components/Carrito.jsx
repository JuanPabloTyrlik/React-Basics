import React from "react";
import "./carrito.css";

const Carrito = ({ carrito, setCarrito }) => {
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito([...nuevoCarrito]);
  };

  return (
    <div className="carrito">
      <h2>Tu carrito</h2>
      {carrito.length === 0 ? (
        <p>No hay elementos</p>
      ) : (
        carrito.map((producto) => {
          const { nombre, id } = producto;
          return (
            <div>
              <p>{nombre}</p>
              <button type="button" onClick={() => eliminarProducto(id)}>
                Eliminar
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Carrito;
