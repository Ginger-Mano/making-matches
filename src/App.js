import './App.css';
import {useState, useEffect} from "react"

function App() {

  const [clicked, useClick] = useState(false)

  let matchClick = (evt) => {
    console.log(evt)
  }
  return (
    <div>

    <div className="div1">
      <h2 onClick={matchClick} id="talk">hello</h2>
    </div>

    <div className="div2">
      <h2 onClick={matchClick} id="talk">hello</h2>
    </div>

    </div>
  );
}

export default App;
