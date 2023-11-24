import React from 'react';
import './Producto.css';

export default function Producto({ listaProducto, setListaProducto }) {
  const handleEliminarProducto = (id) => {
    const nuevaLista = listaProducto.filter((producto) => producto.id !== id);
    setListaProducto(nuevaLista);
  };

  return (
    <div className="containerProductos">
      {listaProducto.map((p) => {
        return (
          <div className="productoCompleto" key={p.id}>
            <div className="textoProducto">
              <h3 className="titleProducto">{p.title}</h3>
              <p className="descripcionProducto">{p.descripcion}</p>
              <p className="precioProducto">$ {p.precio}</p>
            </div>
            <button className="agregarCarrito"></button>
            <div className="botoneras">
              <div className="cantidadProducto">
                <button className="menosCantidad">
                  <img src="/src/icons/menos.png" alt="menos" />
                </button>
                <p className="cantidadProducto"></p>
                <button className="masProducto"></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
