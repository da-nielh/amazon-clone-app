import React from 'react'
import classes from './Header.module.css'
import { IoMdMenu } from "react-icons/io";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
        <ul>
            <li><IoMdMenu />All</li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerHeader