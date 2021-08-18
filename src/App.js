import './App.css';
import React, {Component} from "react"
import NewButton from "./NewButton"
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

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
  }

  testing = (evt) => {
    let new_counter = this.state[evt.target.parentElement.className].counter + 1
 
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

  nonMatchAlert = () => {
    this.setState({
      notifyAlert: true
    })
    alert("Not a Match! Try Again")
  }

  handleClick = (evt) => { 
  this.state.clickedButtons.push(evt.target.parentElement)
  
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
<div >

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

    <NewButton counter={this.state.button1.counter} 
                arr={["one", "Live Your Life!", "three"]} 
                increment={this.testing} text={this.state.arr[0]} 
                name={"button1"} 
                notifyAlert={this.state.notifyAlert} 
                handleMatched={this.handleMatched}/>

    <NewButton counter={this.state.button1.counter} 
                arr={["one", "Live Your Life!", "three"]} 
                increment={this.testing} 
                text={this.state.arr[0]} 
                handleMatched={this.handleMatched} 
                name={"button2"}/>

    <div className="button2">
                <button onClick={this.handleMatched}>One</button>
    </div>

    <div>
      <Button className="button3" 
              onClick={this.handleMatched} 
              notifyAlert={this.state.notifyAlert} 
              variant="outlined" 
              style={{backgroundColor: '#12824C', color: '#FFFFFF' , size: "large"}}>One</Button>
    </div>

  </div>

</div>

  )
}
}
export default App;