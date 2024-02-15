import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'


function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/Auth' element={<Auth />}/>
                <Route path='/payment' element={<Payment />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path='/catagory/:catagoryName' element={<Result />}/>
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing