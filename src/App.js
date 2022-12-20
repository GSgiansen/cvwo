
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
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
      </header>
    </div>
  );
}

export default App;
