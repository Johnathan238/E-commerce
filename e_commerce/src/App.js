import React, { useState, useEffect } from 'react'
import { commerce } from './library/commerce'
import { Products, Navbar } from './Components'
import './App.css';
// import reactDom from 'react-dom';

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart)

  console.log(products)



  return (
    <div className="App">

      <header className="App-header">
        E-Commerce
      </header>
      
      <Navbar />
      <Products products={products} onAddToCart={handleAddToCart} />

      {/* <video>
        <source src="https://youtu.be/CWD56bQOxKM" type="video/mp4">
      </video> */}
    </div>
  );
}

export default App;
