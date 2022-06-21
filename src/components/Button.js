function Button(props){
    return (
        <div className="btn" onClick={props.onClick}>
            <i className={props.iconClass}>&nbsp;</i>
            <div>{props.text}</div>
        </div>
    );
}

export default Button;