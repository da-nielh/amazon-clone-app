import React, { useState, Context, useContext } from 'react'
import classes from './Auth.module.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {DataContext} from '../../components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'

function Auth() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [{user}, dispatch] = useContext(DataContext)
  const navigate = useNavigate()

  const navStateData = useLocation()
  // console.log(navStateData);

  console.log(user);

  const authHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name === 'signIn'){
      // firebase auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        navigate(navStateData?.state?.redirect || '/')
      }) 
      .catch((err) => (setError(err.message)))
    }else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        navigate(navStateData?.state?.redirect || '/')
      })
      .catch((err) => setError(err.message))
    }
  }

  // console.log(password, email);

  return (
      <div className={classes.auth_container}>
        <div className={classes.logo__container}>
          <Link to='/'>
            <div className={classes.img}></div>
          </Link>
        </div>

        <div className={classes.form__container}>

          {
            error && (
              <p style={
                {
                  paddingTop: '20px', 
                  color:'red',
                  alignContent: 'center'
                }
              }>{error}</p>
            )
          }

          <h1>Sign in</h1>

          {
            navStateData?.state?.msg && (
              <p style={{
                padding: '5px',
                textAlign: 'center',
                color: 'red',
              }}>
                {navStateData?.state?.msg}
              </p>
            )
          }

          <form action="">
            <div className={classes.email__container}>
              <label htmlFor="email">E-mail</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' />
            </div>

            <div className={classes.password__container}>
              <label htmlFor="password">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' />
            </div>

            <button type='submit' onClick={authHandler} name='signIn'>Sign in</button>

            <div className={classes.term_amazon}>
              <p>By continuing, you agree to Amazon's <Link to='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088'>Conditions of Use</Link> and <Link to='https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496'>Privacy Notice</Link>.</p>

              <Link to='' className={classes.help}>Need help?</Link>
              <hr />
              <label>Buying for work?</label>
              <Link className={classes.last__link}>Shop on Amazon Business</Link>
            </div>
          </form>
        </div>
        <div className={classes.new__to}>
          <p>New to Amazon?</p>
        </div>
        <div className={classes.signup__button}>
          <button type='submit' onClick={authHandler} name='signUp'>Create your Amazon account</button>
        </div>
      </div>
  )
}

export default Auth