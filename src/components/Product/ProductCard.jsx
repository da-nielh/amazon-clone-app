import React from 'react';
import { Rating } from '@mui/material';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css';
import { Link } from 'react-router-dom'; 

function ProductCard({ product, flex, renderDisc }) {
    const { image, title, id, rating, price, description } = product;

    return (
        <div className={`${classes.card__container} ${flex ? classes.product__flexed :''}`}>
            <Link to={`/products/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDisc && <div style={{maxWidth:'750px'}}>{description}</div>}
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
                <button className={classes.button}>
                    add to cart
                </button>
            </div>
        </div>
    );
}

export default ProductCard;
