import React from 'react'
import s from "../styles/Indivpost.css"

const Indivpost = ({userid,content}) => {
  return (
    <div className='post'>
        <text className='userid'>{userid}</text>
        <p></p>
        <div className='content'>{content}</div>
    </div>
  )
}

export default Indivpost