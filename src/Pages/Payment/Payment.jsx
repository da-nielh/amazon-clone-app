import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'
import {PulseLoader} from "react-spinners"

import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { colors } from '@mui/material'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'

import { axiosInstance } from '../../Api/axios'
import { db } from '../../Utility/firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../Utility/action.type'


function Payment() {
  const [{user, baske}, dispatch] = useContext(DataContext)
    
  const totalItem = baske?.reduce((amount, item) => {
      return item.amount + amount
  },0)

  const total = baske.reduce((amount, item) => {
    return item.price * item.amount + amount
  },0)

  const [cardError, setCardError] = useState(null)

  const [processing, setProcessing] = useState(false)

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    // to show the error type
    // console.log(e); 
    e?.error?.message? setCardError(e?.error?.message): setCardError('')
  }

  const handlePayment = async(e) => {
    e.preventDefault();

    try {
      setProcessing(true)
      // Step 1: backend || functions --> contact to the client secret
      const response = await axiosInstance({
        method: 'POST',
        url: `/payment/create?total=${total*100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret

    // Step 2: client side (react side confirmation) by using Stripe

      const {paymentIntent} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method:{
            card: elements.getElement(CardElement)
          }
        }
      )
      // console.log(paymentIntent);
      // Step 3: After confirmation --> order firestore database save, clear Basket
      await db
        .collection("users")
        .doc(user.uid)
        .collection("orders")
        .doc(paymentIntent.id)
        .set({
          baske: baske,
          amount: paymentIntent.amount,
          created: paymentIntent.created
      })

      // make the basket empity

      dispatch({type: Type.EMPITY_BASKET})

      setProcessing(false)
      navigate("/orders", {state:{msg: 'you have placed new Order'}})
    } catch (error){
      console.log(error);
      setProcessing(false)
    }
  }

  return (
    <Layout>
      {/* hader */}
      <div className={classes.payment__header}>
        Checkout ({totalItem}) items
      </div>

      {/* Payment method */}
      <div className={classes.payment}>

        {/* address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          <div>
            <div className={classes.product__cont}>
              {
                baske && baske?.map((item, index) => (
                  <>
                    <div>
                      <ProductCard key={index} product={item} renderDisc={false} renderAdd={false} flex={true}/>
                    </div>
                  </>
                ))
              }
            </div>
          </div>
        </div>
        <hr />

        {/* Card form */}
        <div className={classes.flex}>
              <h3>Payment methods</h3>
              <div className={classes.payment__card__container}>
                <div className={classes.payment__details}>
                  <form onSubmit={handlePayment}>
                    {
                    cardError && <small style={{color: 'red'}}>{cardError}</small>
                    }
                    <CardElement onChange={handleChange} />
                    <div className={classes.payment__price}>
                      <div>
                        <span>
                          Total Order :&emsp;<CurrencyFormat amount={total}/>
                        </span>
                      </div>
                      <button type='submit'>
                        {
                          processing?(
                            <div className={classes.loading}>
                              <p>pleace wait...</p>
                            </div>
                          ):(
                            'Pay now'
                          )
                        }
                      </button>
                    </div>
                  </form>
                </div>
              </div>
        </div>
      </div>

    </Layout>
  )
}

export default Payment