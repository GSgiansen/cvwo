import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Wall from './components/Wall';
import Newpost from './components/Newpost';
import Indivpost from './components/Indivpost';
function App() {
  const testID="admin";
  const [posts,setPosts]=useState([
    {
      "userid":"John Cena",
      "content":"happy wappy today oi had a v nice nburger nwejrhnd s2je 3ieri3h and i had coke",


    },
    {
      "userid":"Spongebob SquarePants",
      "content":"sadness",


    },
    {
      "userid":"Clowning",
      "content":"frustration",


    },
    {
      "userid":"Sherwin",
      "content":"Playing pool right now",


    },
    {
      "userid":"Amanda",
      "content":"Having fun i the us",


    }
  ])

  const addPost = ({userid,content}) => {
    console.log(userid)
    const newP={userid,content}
    setPosts([...posts,newP])
    console.log(posts)

  }

  
  return (
    <div className="App">
      <Navbar/>
      <header className="main-body">
      <Newpost addPost={addPost} testID={testID}/>
        <Wall posts={posts}/>
      </header>
    </div>
  );
}

export default App;
