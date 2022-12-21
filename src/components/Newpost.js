import React from 'react'
import s from "../styles/Indivpost.css"

const Newpost = ({addPost}) => {
    const onPost = () =>{
        addPost()
        
    }
  return (
    <div className='newpost'>
        <form>
        <div className='postheader'>
        <div className='posttext'>Clam_Hunter is spilling...</div>
        <button className='postbutton' type="button" onClick={onPost}>Post!</button>

        </div>
        <input 
        className='prompt'
        type="text"
        placeholder='Whats the tea today babe ?'
        />
        </form>

    </div>
  )
}

export default Newpost