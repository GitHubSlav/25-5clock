function ArrowButton(props) {
    return (
        <div 
            className={"arrow-btn " + props.className}
            onClick={props.onClick}
        >
            <i class={props.arrowIcon}></i>
        </div>
    );
}

export default ArrowButton;