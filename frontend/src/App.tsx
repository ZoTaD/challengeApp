// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [producto, setProducto] = useState('')

  const productos = [
    { id: 1, nombre: 'Manzana', precio: 2500 },
    { id: 2, nombre: 'Pera', precio: 3500 },
    { id: 3, nombre: 'Banano', precio: 4500 },
  ]

  const lista = productos.map((producto) => (
    <li key={producto.id}>
      {producto.nombre} - {producto.precio}
    </li>
  ))

  return (
    <>
      <h1>Productos</h1>
      <ul>{lista}</ul>
    </>
  );

}

export default App
