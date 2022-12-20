import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Wall from './components/Wall';

function App() {
  const posts=[
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


    }
  ]

  
  return (
    <div className="App">
      <Navbar/>
      <header className="main-body">
        <Login/>
        <Wall posts={posts}/>
      </header>
    </div>
  );
}

export default App;
