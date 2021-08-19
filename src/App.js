import './App.css';
import React, {Component} from "react"
import NewButton from "./NewButton"
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



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
    button2: {counter: 0},
    button3: {counter: 0}
  }


  removeChildren = (parentElement) => {
    console.log(parentElement)
    parentElement.remove(parentElement.firstChild)
  }


  testing = (evt) => {
    // debugger
    console.log(evt)
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

  <h2>Mouse over the first two buttons to see the text change</h2>
  <h2>Double click on a button to make it disappear</h2>
  <h2>Click on two buttons with a different name to get an alert</h2>

<br></br>
  <div>
    <Grid container spacing={4}justify={"center"}>
    
    <Grid item>
    <NewButton counter={this.state.button1.counter} 
                arr={this.state.arr} 
                increment={this.testing} text={this.state.arr[0]} 
                name={"button1"} 
                notifyAlert={this.state.notifyAlert} 
                handleMatched={this.handleMatched}/>
                </Grid>

    <Grid item>
    <NewButton     
                counter={this.state.button2.counter} 
                arr={this.state.arr} 
                increment={this.testing} 
                text={this.state.arr[0]} 
                handleMatched={this.handleMatched} 
                name={"button2"}
                />
                </Grid>

    <Grid item>           
      <Button className="button2" 
              onClick={this.handleMatched} 
              notifyAlert={this.state.notifyAlert} 
              variant="outlined"
              color="primary"
              style={{fontSize: 50}}>One</Button>
    </Grid>

     <Grid item>
      <Button className="button3" 
              onClick={this.handleMatched} 
              notifyAlert={this.state.notifyAlert} 
              variant="outlined" 
              style={{backgroundColor: '#12824C', color: '#FFFFFF' , fontSize: 50}}>One</Button>
    </Grid> 

    </Grid>

  </div>

</div>

  )
}
}
export default App;