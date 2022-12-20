import s from "../styles/Login.css"
import React from 'react'

const Login = () => {
  return (
    <form className='login'>
      New to TeaParTea ?
    <div className='text-control'>
      <label>Username</label>
      <input
        type='text'
        placeholder='John Cena'
      />
    </div>
    <div className='text-control'>
      <label>Password</label>
      <input
        type='text'
      />
    </div>

    <input type='submit' value='Login/Register'/>
    </form>
  )
}

export default Login