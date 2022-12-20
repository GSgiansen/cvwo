import React from 'react'
import Indivpost from './Indivpost'
import s from "../styles/Wall.css"
const Wall = ({posts}) => {
  return (
    <div className='wall'>
        {posts.map((post) => <Indivpost userid={post.userid} comment={post.content}/>)}
    </div>

  )
}

export default Wall