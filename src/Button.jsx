const Button = (props) => {
    return (
        <div className={props.name}>
            <button onMouseOver={props.increment}>{props.text}</button>
        </div>
    )
}




export default Button