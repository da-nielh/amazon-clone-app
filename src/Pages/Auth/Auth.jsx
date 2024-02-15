import React from 'react'
import Layout from '../../components/Layout/Layout'
import classes from './Auth.module.css'
import { Link } from 'react-router-dom'

function Auth() {
  return (
      <div className={classes.auth_container}>
        <div className={classes.logo__container}>
          <Link>
            <div className={classes.img}></div>
          </Link>
        </div>

        <div className={classes.form__container}>
          <h1>Sign in</h1>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <input type="email" id='email' />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
            <button>Sign in</button>
          </form>
        </div>

        <div className={classes.new_amazon}></div>
        <div className={classes.signup__button}></div>
      </div>
  )
}

export default Auth