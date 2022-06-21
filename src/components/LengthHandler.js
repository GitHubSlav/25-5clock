import ArrowButton from "./ArrowButton";
import '../styling/ArrowButton.css'

function LengthHandler(props){
    return (
        <div className="length-handler">
            <div>{props.header}</div>
            <div className="length-controls">
                <ArrowButton 
                    arrowIcon="fa fa-arrow-up" 
                    onClick={props.minUp}
                    className="arrow-up"
                />
                <div>{props.time + " min"}</div>
                <ArrowButton 
                    arrowIcon="fa fa-arrow-down" 
                    onClick={props.minDown}
                    className="arrow-down"
                />
          </div>
        </div>
    );
}

export default LengthHandler