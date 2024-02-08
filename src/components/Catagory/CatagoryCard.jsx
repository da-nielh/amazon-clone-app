import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Catagory.module.css';

function CatagoryCard({ data }) {
  // console.log(data);
  return (
    <div className={classes.catagory} key={data.title}>
      <Link to={`/catagory/${data.name}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt="" />
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
