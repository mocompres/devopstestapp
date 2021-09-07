import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [devops, setDevops] = useState();
  return (
      <div className="App">
        <h3>Welcome {devops}</h3>
        <input type={"text"} onChange={(e)=>setDevops(e.target.value)}/>
      </div>
  );
}

export default App;
