import React, { useState, useEffect } from 'react'
import { commerce } from './library/commerce'
import { Products, Checkout, Navbar, Cart } from '../src/Components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
// import { Checkout } from '@chec/commerce.js/features/checkout';
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

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity })

    setCart(response.cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const item = await commerce.cart.remove(productId)

    setCart(item.cart)
  }

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty()

    setCart(item.cart)
  }


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])

  console.log(cart)

  return (
    <Router>

    <div className="App">

      <header className="App-header">
        E-Commerce
      </header>
      
      <Navbar totalItems={cart.total_items}/>

        <Switch>
          <Route exact path="/products">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path="/cart">
            <Cart 
            cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
            />
          </Route>

          <Route exact path="/checkout">
            <Checkout cart={cart}/>
          </Route>
        </Switch>

      {/* <video>
        <source src="https://youtu.be/CWD56bQOxKM" type="video/mp4">
      </video> */}
    </div>

    </Router>
  );
}

export default App;
