import ArrowButton from "./ArrowButton";
import '../styling/ArrowButton.css'

function LengthHandler(props){
    return (
        <div className="length-handler">
            <div>{props.header}</div>
            <div className="length-controls">
                <ArrowButton 
                    arrowIcon="fa fa-arrow-up" 
                    onClick={props.arrowClick}
                    className="arrow-up"
                    increment={props.valueUp}
                />
                <div>{props.time + " min"}</div>
                <ArrowButton 
                    arrowIcon="fa fa-arrow-down" 
                    onClick={props.arrowClick}
                    className="arrow-down"
                    increment={props.valueDown}
                />
          </div>
        </div>
    );
}

export default LengthHandler