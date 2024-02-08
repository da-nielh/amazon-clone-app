import React, { useContext } from 'react';
import Layout from '../../components/Layout/Layout';
import { DataContext } from '../../components/DataProvider/DataProvider';
import ProductCard from '../../components/Product/ProductCard';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css'
import {Type} from '../../Utility/action.type'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Cart() {
  const [{baske, user}, dispatch] = useContext(DataContext); 
  const total = baske.reduce((amount, item) => {
    return item.price * item.amount + amount
  },0)
  // console.log(baske);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h1 style={{padding: '20px'}}>Shopping Cart</h1>
          <hr style={{marginLeft: '20px'}}/>
          {
            baske?.length === 0 ? ( 
              <p>Oops! No item in the cart</p>
            ) : (
              baske?.map((item, i) => {
                return <section className={classes.card__product}>
                  <ProductCard key={i} product={item} renderDisc={true} renderAdd={false} flex={true} /> 
                  <div className={classes.btn_conatinet}>
                    <button onClick={() => increment(item)}><MdKeyboardArrowUp size={30}/></button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}><MdOutlineKeyboardArrowDown size={30}/></button>
                  </div>
                </section> 
              })
            )
          }
        </div>
          {
          baske?.length !== 0 && (
            <div className={classes.subtotal}>
              <div>
                <p>Subtotal ({baske?.length} item)</p>
                <CurrencyFormat amount={total}/>
              </div>
              <span>
                <input type="checkbox" />
                <small>This order contains a gift</small>
              </span>
              <Link to="/payment" >Continue to checkout</Link>
            </div>
          )
        }
      </section>
    </Layout>
  );
}

export default Cart;
