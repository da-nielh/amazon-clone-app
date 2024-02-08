import React from 'react';
import { catagoryInfo } from './CatagoryFullInfo';
import CatagoryCard from './CatagoryCard';
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <section className={classes.Catagory__container}>
      {catagoryInfo.map((infos) => (
        <CatagoryCard data={infos} key={infos.title} /> // Added key prop for React optimization
      ))}
    </section>
  );
}

export default Catagory;
