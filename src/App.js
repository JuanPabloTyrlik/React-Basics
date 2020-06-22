import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [productos, setProductos] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50},
    {id: 2, nombre: 'Camisa Node', precio: 40},
    {id: 3, nombre: 'Camisa Angular', precio: 30},
    {id: 4, nombre: 'Camisa Vue', precio: 20}
  ]);

  return (
    <Fragment>
      <Header 
        title = 'Tienda Virtual'
      />
      <Footer 
        year = {new Date().getFullYear()}
      />
    </Fragment>
  );
}

export default App;
