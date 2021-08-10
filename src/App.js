import './App.css';
import React, {Component} from "react"


class App extends Component {

  state = {
    button1: false,
    button2: false,
    clickedButtons: [],
    matchedButtonName: [],
    notifyAlert: false
  }

  removeChildren = (parentElement) => {
    console.log(parentElement)
    // debugger
    parentElement.remove(parentElement.firstChild)
    // while (parentElement.firstChild) {
    //   parentElement.remove(parentElement.firstChild)
    // }
  }

  testing = () => {
    let arr = ["one", "two", "three"];
    setInterval((word) => {
      // console.log(word)
  }, 3000);
  }

  nonMatchAlert = () => {
    this.setState({
      notifyAlert: true
    })
    alert("Not a Match! Try Again")
  }

  handleClick = (evt) => { 
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

  handleMatched = (evt) => {
    console.log(evt)
    this.state.matchedButtonName.push(evt.target.parentElement)
    // debugger
    if (this.state.matchedButtonName.length === 2) {
        if (this.state.matchedButtonName[0].innerText === this.state.matchedButtonName[1].innerText) {
          console.log("Yes!")
          this.state.matchedButtonName.forEach(button => this.removeChildren(button))
          this.setState({
            ...this.state, 
            matchedButtonName: [],
            notifyAlert: false
          })
        } else {
          this.nonMatchAlert() //repeat alert without refresh
          this.setState({
            ...this.state, 
            clickedButtons: [],
            notifyAlert: false
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
      <button onClick={this.handleMatched} >Four</button>
    </div>

    <div className="button2">
      <button onClick={this.handleMatched}>One</button>
    </div>

    <div className="button3">
      <button onClick={this.handleMatched}>One</button>
    </div>

  </div>

</div>

  )
}
}
export default App;