import './App.css';
import React, {Component} from "react"
import Button from "./Button"
let counter = 0;

class App extends Component {

  state = {
    button1: false,
    button2: false,
    clickedButtons: [],
    matchedButtonName: [],
    notifyAlert: false,
    mouseOver: false,
    arr: ["one","two","three"],
    button1: {counter: 0},
    button2: {counter: 0}
  }

  removeChildren = (parentElement) => {
    console.log(parentElement)
    // debugger
    parentElement.remove(parentElement.firstChild)
    // while (parentElement.firstChild) {
    //   parentElement.remove(parentElement.firstChild)
    // }
  }

  testing = (evt) => {
    // debugger
    // let arr = ["one", "two", "three"];

    //    console.log(arr[counter++])
       
    //    if (counter > arr.length - 1) {
    //      counter = 0;
    //    }
    let new_counter = this.state[evt.target.parentElement.className].counter + 1
    // debugger
    if(new_counter > this.state.arr.length - 1){
      this.setState({
        ...this.state,
        [evt.target.parentElement.className]: {...this.state[evt.target.parentElement.className], counter: 0}
      })
    } else {
        this.setState({
          ...this.state,
          [evt.target.parentElement.className]: {...this.state[evt.target.parentElement.className], counter: new_counter}
        })
    }
     evt.target.innerText = this.state.arr[this.state[evt.target.parentElement.className].counter]
      
    }

  //   setInterval((word) => {
  //     //set state mouseOver to true
  //     // changeInnerText()
  //     this.setState({
  //       mouseOver: true
  //     })
  //     //if statement (if mouseOver is true)
  //       //iterate through arr
  //       //evt.target.innerText = that word
  //       // evt.target.innerText = word
       
  //     if (this.state.mouseOver) {
  //       arr.forEach(word => evt.target.innerText = word)
  //     }
  //     // console.log(word)
  // }, 500);

  // }

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

  <div className="button1">
      <button onClick={this.handleClick}>2</button>
    </div>

    <div className="button2">
      <button onClick={this.handleClick}>2</button>
    </div>

  </div>


<br></br>
  <div>

    <Button counter={this.state.button1.counter} arr={["one", "two", "three"]} increment={this.testing} text={this.state.arr[0]} name={"button1"}/>

    <Button counter={this.state.button1.counter} arr={["one", "two", "three"]} increment={this.testing} text={this.state.arr[0]} name={"button2"}/>

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