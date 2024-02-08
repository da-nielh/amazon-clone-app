import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Signin from './Pages/Auth/Signup'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'


function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/Auth' element={<Signin />}/>
                <Route path='/payment' element={<Payment />}/>
                <Route path='/orders' element={<Orders />}/>
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing