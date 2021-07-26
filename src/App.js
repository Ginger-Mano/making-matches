import './App.css';
import {useState, useEffect, useRef} from "react"


function  App() {
  const toggle = useRef(null);

  const [clicked, setClick] = useState(false)

  let matched = () => {
    if (handleClick) {
      toggle.current.remove()
    }
  }
  
  let handleClick = (evt) => {
      setClick(true)
  }


  return (
    <div>

    <div >
      <button className="div1" onClick={matched} id="talk" ref={toggle}>hello</button>
    </div>

    <div >
      <button className="div2" onClick={matched} id="talk" ref={toggle}>hello</button>
    </div>



    </div>
  );
}

export default App;
