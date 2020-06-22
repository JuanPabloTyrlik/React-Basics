import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  const [productos, setProductos] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50},
    {id: 2, nombre: 'Camisa Node', precio: 40},
    {id: 3, nombre: 'Camisa Angular', precio: 30},
    {id: 4, nombre: 'Camisa Vue', precio: 20}
  ]);

  const [carrito, setCarrito] = useState([]);

  return (
    <Fragment>
      <Header 
        title = 'Tienda Virtual'
      />
      {
        productos.map(producto => (
          <Producto 
            key = {producto.id}
            producto = {producto}
            carrito = {carrito}
            setCarrito = {setCarrito}
          />
        ))
      }
      <Carrito 
        carrito={carrito}
        setCarrito={setCarrito}
      />
      <Footer 
        year = {new Date().getFullYear()}
      />
    </Fragment>
  );
}

export default App;
