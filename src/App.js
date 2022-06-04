import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from "styled-components"
import { Home, SingleProduct, Cart, About, Checkout, Error, PrivateRoute, Products } from "./pages"
import ProductsPage from './pages/ProductsPage'

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/comfy-react-site" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="checkout" element={<PrivateRoute>
            <Checkout />
          </PrivateRoute>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>

  )
}

export default App
