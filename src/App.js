import React, { useState } from 'react';
import Producto from './components/Producto.jsx';
import './style.css';

export default function App() {
  const [producto, setProducto] = useState({
    titleAddProducto: '',
    descripcionAddProducto: '',
    precioAddProducto: '',
  });
  const [listaProducto, setListaProducto] = useState([]);
  const [contador, setContador] = useState(1);

  const handleInput = (e) => {
    const { name, value } = e.target;

    if (name === 'precioAddProducto' && isNaN(value)) {
      alert('Por favor, ingrese un valor numérico para el precio.');
      return;
    }

    setProducto({ ...producto, [name]: value });

    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      producto.titleAddProducto.trim() != '' &&
      producto.descripcionAddProducto.trim() != '' &&
      producto.precioAddProducto.trim() != ''
    ) {
      const nuevoProducto = {
        id: contador,
        title: producto.titleAddProducto,
        descripcion: producto.descripcionAddProducto,
        precio: producto.precioAddProducto,
      };
      setListaProducto([...listaProducto, nuevoProducto]);
      setProducto({
        titleAddProducto: '',
        descripcionAddProducto: '',
        precioAddProducto: '',
      });
      setContador(contador + 1);
    } else {
      alert('Completar campos');
    }
  };

  return (
    <main className="container">
      <section className="containerFormProductos">
        <h1 className="titleCargar">Cargar Producto</h1>
        <form onSubmit={handleSubmit} className="formAddProducto">
          <input
            type="text"
            name="titleAddProducto"
            className="titleAddProducto"
            value={producto.titleAddProducto}
            onChange={handleInput}
            placeholder="Nombre del producto"
          />
          <textarea
            rows="1"
            name="descripcionAddProducto"
            className="descripcionAddProducto"
            value={producto.descripcionAddProducto}
            onChange={handleInput}
            placeholder="Descripcion"
          ></textarea>
          <input
            type="text"
            name="precioAddProducto"
            className="precioAddProducto"
            value={producto.precioAddProducto}
            onChange={handleInput}
            placeholder="Precio"
          />
          <button className="btnAgregar" type="submit">
            Agregar
          </button>
        </form>
      </section>
      <section className="containerListProductos">
        <div className="headerListado">
          <h1 className="titleListado">Listado</h1>
          <div className="precios">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_kT4egf4BjvplSGQdo_zV-oSuVtuYyQTCnA&usqp=CAU"
              alt="carrito"
              className="carrito"
            />
            <h3 className="precioTotal">$2500</h3>
          </div>
        </div>
        <Producto
          listaProducto={listaProducto}
          setListaProducto={setListaProducto}
        />
      </section>
    </main>
  );
}
