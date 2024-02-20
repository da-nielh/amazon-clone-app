import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Result from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'


function Routing() {
  const stripePromise = loadStripe('pk_test_51OkCDRJ5ZIoxnTnU2dOgimr705vK0moOdwfKz2GAhgs05Aa8hQs8pzil8bxUTGDwICTd5VJcO2V4BpHvdOOCKF7h00W8qemwmL');
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/Auth' element={<Auth />}/>
                <Route path='/payment' element={
                  <Elements stripe={stripePromise}>
                    <ProtectedRoute msg={'you must login to pay'} redirect={'/payment'}>
                      <Payment />
                    </ProtectedRoute>
                  </Elements>
                }/>
                <Route path='/orders' element={
                  <ProtectedRoute msg={'you must login to see your orders'} redirect={'/orders'}>
                    <Orders />
                  </ProtectedRoute>
                }/>
                <Route path='/catagory/:catagoryName' element={<Result />}/>
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing