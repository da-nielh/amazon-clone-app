import React from 'react'
import classes from './Carousels.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carousels() {
    let img = [
        'https://m.media-amazon.com/images/I/71nwqPZaNRL._SX3000_.jpg', 
        'https://m.media-amazon.com/images/I/71NqG9bBp7L._SX3000_.jpg', 
        'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg', 
        'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg', 
        'https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg', 
        'https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg'];
  return (
    <div>
        <Carousel
            className={classes.img__container}
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            interval={4000}
            transitionTime={1000}
            swipeable={true}
        >
            {
                img.map((imageItem) => {
                    return (
                        <img src={imageItem}/>
                    )
                })
            }
        </Carousel>
        <div className={classes.hero__img}></div>
    </div>
  )
}

export default Carousels