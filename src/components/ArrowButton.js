function ArrowButton(props) {
    return (
        <div 
            className={"arrow-btn " + props.className}
            onClick={() => props.onClick(props.increment)}
        >
            <i className={props.arrowIcon}></i>
        </div>
    );
}

export default ArrowButton;