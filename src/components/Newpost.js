import React from 'react'
import s from "../styles/Indivpost.css"
import { useState } from 'react'
const Newpost = ({addPost}) => {
    const onPost = () =>{
        addPost({userID,content})
        setContent('')
    }
    const [userID, setUserID] = useState('')
    const [content, setContent] = useState('')
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
        value={content}
        onChange={(e) => setContent(e.target.value)}
        />
        </form>

    </div>
  )
}

export default Newpost