import React, { useContext } from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom'; 
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';

function ProductCard({ product, flex, renderDisc, renderAdd }) {
    const { image, title, id, rating, price, description } = product;

    const [state, dispatch] = useContext(DataContext)
    console.log(state);
    const addToCart = () => {
        dispatch({
            type: Type.ADD_TO_BASKET,
            item: {
                image, title, id, rating, price, description
            }
        })
    }

    return (
        <div className={`${classes.card__container} ${flex ? classes.product__flexed :''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDisc && <div style={{maxWidth:'650px', marginTop: '20px'}}>{description}</div>}
                <div className={classes.rating}>
                    {rating && rating.rate ? (
                        <>
                            <Rating value={rating.rate} precision={0.1}/>
                            <small>{rating.count}</small>
                        </>
                    ) : (
                        <div>No rating available</div>
                    )}
                </div>
                <div>
                    <CurrencyFormat amount={price} />
                </div>
                {
                    renderAdd && 
                    <button className={classes.button} onClick={addToCart}>
                        add to cart
                    </button>
                }
                
            </div>
        </div>
    );
}

export default ProductCard;
