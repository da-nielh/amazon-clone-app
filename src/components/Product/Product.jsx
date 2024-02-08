import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import classes from './Product.module.css';
import Loader from '../../components/Loader/Loader';

function Product() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true); // Update isLoading state to true when starting to fetch data
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data);
                setIsLoading(false); // Update isLoading state to false when data fetching is complete
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false); // Update isLoading state to false if there's an error
            });
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <section className={classes.products__container}>
                    {products.map((singleProduct) => (
                        <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true} />
                    ))}
                </section>
            )}
        </>
    );
}

export default Product;
