import React from 'react'
import Indivpost from './Indivpost'
import s from "../styles/Wall.css"
import Newpost from './Newpost'
const Wall = ({posts}) => {
  return (
    <div className='wall'>
        
        {posts.map((post) => <Indivpost key={post.userid} userid={post.userid} content={post.content}/>)}
    </div>

  )
}

export default Wall