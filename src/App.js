import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Wall from './components/Wall';

function App() {
  const posts=[
    {
      "userid":1,
      "content":"happy wappy",


    },
    {
      "userid":2,
      "content":"sadness",


    },
    {
      "userid":3,
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
