import React from "react"
import Button from '@material-ui/core/Button';

const NewButton = (props) => {
    return (
        <div className={props.name}>
            <Button onMouseOver={props.increment} 
                    notifyAlert={props.notifyAlert} 
                    onClick={props.handleMatched} 
                    variant="outlined" 
                    style={{backgroundColor: '#12824C', 
                            color: 'primary' , 
                            fontSize: 50}}>{props.text}</Button>
        </div>
    )
}




export default NewButton