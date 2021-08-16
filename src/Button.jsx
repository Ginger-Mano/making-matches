const Button = (props) => {
    return (
        <div className={props.name}>
            <button onMouseOver={props.increment} notifyAlert={props.notifyAlert} onClick={props.handleMatched}>{props.text}</button>
        </div>
    )
}




export default Button