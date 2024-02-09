import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className={classes.footer__containers}>
            <div className={classes.top__footer}>
                <span>Back to top</span>
            </div>
            <div className={classes.middle__footer}>
                <div className={classes.link__container}>
                    <ul>
                        <h4>Get to Know Us</h4>
                        <Link><li>Careers</li></Link>
                        <Link><li>Blog</li></Link>
                        <Link><li>About Amazon</li></Link>
                        <Link><li>Investor Relations</li></Link>
                        <Link><li>Amazon Devices</li></Link>
                        <Link><li>Amazon Science</li></Link>
                    </ul>
                    <ul>
                        <h4>Make Money with Us</h4>
                        <Link><li>Sell products on Amazon</li></Link>
                        <Link><li>Sell on Amazon Business</li></Link>
                        <Link><li>Sell apps on Amazon</li></Link>
                        <Link><li>Become an Affiliate</li></Link>
                        <Link><li>Advertise Your Products</li></Link>
                        <Link><li>Self-Publish with Us</li></Link>
                        <Link><li>Host an Amazon Hub</li></Link>
                        <Link><li>See More Make Money with Us</li></Link>
                    </ul>
                    <ul>
                        <h4>Amazon Payment Products</h4>
                        <Link><li>Amazon Business Card</li></Link>
                        <Link><li>Shop with Points</li></Link>
                        <Link><li>Reload Your Balance</li></Link>
                        <Link><li>Amazon Currency Converter</li></Link>
                    </ul>
                    <ul>
                        <h4>Let Us Help You</h4>
                        <Link><li>Amazon and COVID-19</li></Link>
                        <Link><li>Your Account</li></Link>
                        <Link><li>Your Orders</li></Link>
                        <Link><li>Shipping Rates & Policies</li></Link>
                        <Link><li>Returns & Replacements</li></Link>
                        <Link><li>Manage Your Content and Devices</li></Link>
                        <Link><li>Amazon Assistant</li><li>Help</li></Link>
                    </ul>
                </div>
                <hr />
            </div>
            <div className={classes.lower__footer}></div>
        </div>
    </>
  )
}

export default Footer