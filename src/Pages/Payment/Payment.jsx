import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Payment.module.css'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'

import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { colors } from '@mui/material'
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat'

import { axiosInstance } from '../../Api/axios'

function Payment() {
  const [{user, baske}] = useContext(DataContext)
    
  const totalItem = baske?.reduce((amount, item) => {
      return item.amount + amount
  },0)

  const total = baske.reduce((amount, item) => {
    return item.price * item.amount + amount
  },0)

  const [cardError, setCardError] = useState(null)

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    // to show the error type
    // console.log(e); 
    e?.error?.message? setCardError(e?.error?.message): setCardError('')
  }

  const handlePayment = async(e) => {
    e.paymentDefault();

    try {
      // Step 1: backend || functions --> contact to the client secret
      const response = await axiosInstance({
        method: 'POST',
        url: `/payment/create?total=${total*100}`,
      });
      console.log(response.data);
    } catch (error){
      console.log(error);
    }

    // Step 2: client side (react side confirmation) by using Stripe

    // Step 3: After confirmation --> order firestore database save, clear Basket
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
                      <button type='submit'>Pay now</button>
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