import React from 'react';
import { Link } from 'react-router-dom'; 
import classes from './Header.module.css';
import { BiCart } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import LowerHeader from './LowerHeader';

function Header() {
    return (
        <>
            <section>
                <div className={classes.header__container}>
                    <div className={classes.logo__container}>
                        {/* Use Link component with 'to' prop for navigation */}
                        <Link to='/'>Your Logo Here</Link>
                    </div>

                    <div className={classes.delivery}>
                        <span>
                            <HiOutlineLocationMarker />
                        </span>
                        <div>
                            <p>Delivered to</p>
                            <span>Ethiopia</span>
                        </div>
                    </div>
                    <div className={classes.search}>
                        <div className={classes.search__select__container}>
                            <select name="" id="">
                                <option value="">All</option>
                            </select>
                        </div>

                        <input type="text" placeholder="Search Amazon" />
                        <IoIosSearch size={25} />
                    </div>
                    <div className={classes.order__container}>
                        {/* right side icons */}
                        <div>
                            <Link to='' className={classes.language}>
                                <img src="https://www.freeiconspng.com/thumbs/american-us-flag-icon/us-flag-icon-23.jpg" alt="flag" />
                                <select name="" id="">
                                    <option value="english">EN</option>
                                </select>
                            </Link>
                        </div>
                        <Link to='/Auth' className={classes.signin__container}>
                            <p>Hello, sign in</p>
                            <span>Account & List</span>
                        </Link>
                        <Link to='/orders' className={classes.order__return__container}>
                            <p>Returns</p>
                            <span>& Orders</span>
                        </Link>
                        <Link to='/cart' className={classes.cart}>
                            <BiCart size={35} />
                            <span>0</span>
                            <h4>cart</h4>
                        </Link>
                    </div>
                </div>
            </section>
            <LowerHeader />
        </>
    );
}

export default Header;
