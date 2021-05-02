import React, { useState, useEffect } from 'react'
import { commerce } from './library/commerce'
import { Products, Navbar } from './Components'
import './App.css';
import reactDom from 'react-dom';

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  console.log(products)


  return (
    <div className="App">

      {/* <header className="App-header">
        E-Commerce
      </header> */}
      
      <Navbar />
      <Products />

      {/* <video>
        <source src="https://youtu.be/CWD56bQOxKM" type="video/mp4">
      </video> */}
    </div>
  );
}

export default App;
