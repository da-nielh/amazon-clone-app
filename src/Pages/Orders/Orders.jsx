import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Order.module.css'
import { db } from '../../Utility/firebase'
import { DataContext } from '../../components/DataProvider/DataProvider'
import ProductCard from '../../components/Product/ProductCard'

function Orders() {
  const [{user}, dispatch] = useContext(DataContext)
  const [orders, setOrders] = useState([])

  useEffect( () => {
    if (user) {
      db.collection('users')
      .doc(user.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot((snapshot) => {
        // console.log(snapshot);
        setOrders(
          snapshot.docs.map( (doc) => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      })
    }else{
      setOrders([])
    }
    
  }, [])

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.order__container}>
          <h2>Your Orders</h2>
          {
            orders?.length == 0 &&
            <div className={classes.no__array}>
              <h3>You don't have any orders yet.</h3>
            </div>
          }
          <div>
            {
              orders?.map((eachOrders, index) => {
                return (
                  <div key={index}>
                    <hr />
                    <p>Order Id: {eachOrders?.id}</p>
                    {
                      eachOrders?.data?.baske?.map(order=>{
                        return <ProductCard 
                          flex={true}
                          product={order}
                          key={order.id}
                        />
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Layout>
    
  )
}

export default Orders