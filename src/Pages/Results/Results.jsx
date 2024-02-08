import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productUrl } from '../../Api/endPoints';
import classes from './Results.module.css';
import ProductCard from '../../components/Product/ProductCard';
import Loader from '../../components/Loader/Loader';

function Results() {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState([]);
    const { categoryName } = useParams(); // Corrected variable name

    useEffect(() => {
        setIsLoading(true);
        axios.get(`${productUrl}/products/category/${categoryName}`) // Corrected API endpoint
            .then((res) => {
                setResult(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, [categoryName]); // Added categoryName to dependency array

    return (
        <Layout>
            <section>
                <h1 style={{ padding: '30px' }}>Results</h1>
                <p style={{ padding: '30px' }}>category/{categoryName}</p> {/* Corrected variable name */}
                <hr />
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className={classes.product__container}>
                        {result?.map((product) => (
                            <ProductCard key={product.id} product={product} renderAdd={true} /> // Corrected key value
                        ))}
                    </div>
                )}
            </section>
        </Layout>
    );
}

export default Results;
