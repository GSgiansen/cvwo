import s from "../styles/Login.css"
import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <div className="text">New to teapartea ? Sign up here!</div>
        <form>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname"></input>
        <p></p>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname"></input>
        </form>
    </div>
  )
}

export default Login