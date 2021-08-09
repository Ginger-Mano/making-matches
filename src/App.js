import './App.css';
import React, {Component} from "react"


class App extends Component {

  state = {
    button1: false,
    button2: false,
    clickedButtons: []
  }

  removeChildren = (parent) => {
    console.log(parent)
    while (parent.firstChild) {
      parent.remove(parent.firstChild)
    }
  }

  testing = () => {
    let arr = ["one", "two", "three"];
    
    setInterval((word) => {
      // console.log(word)
      
  }, 3000);
  }

  handleClick = (evt) => {
    // debugger
 
  this.state.clickedButtons.push(evt.target.parentElement)
  // console.log(evt)
  console.log(this.state.clickedButtons)

  if (this.state.clickedButtons.length === 2) {
    // console.log(this.state.clickedButtons[0].className)
    if (this.state.clickedButtons[0].className === this.state.clickedButtons[1].className) {
      this.state.clickedButtons.forEach(div => this.removeChildren(div))
      this.setState({
        ...this.state, 
        clickedButtons: []

      })
    } else {
      this.setState({
        ...this.state, 
        clickedButtons: []

      })
    }
    
  }
  }

render () {

  return (
    <div>
<div>

<div className="button1" >
  <button onClick={this.handleClick} onMouseOver={this.testing}>1</button>
</div>

<div className="button2">
  <button onClick={this.handleClick}>2</button>
</div>

</div>


<br></br>
<div>

<div className="button1">
  <button onClick={this.handleClick} >1</button>
</div>

<div className="button2">
  <button onClick={this.handleClick}>2</button>
</div>

</div>

</div>

  )
}
}
export default App;