import { useState } from "react";
import calculate from "../../logic/calculator";
import ButtonPanel from "../ButtonPanel/ButtonPanel";
import DisplayController from "../DisplayController/DisplayController";

const Calculator = () => {

    const [state, setState] = useState({
        total: null,
        next: null,
        operation: null,
    });


    const actionHandler = (action) => {
        //    const newState =  calculate(action, state);
        //    setState(newState);
        // OR
        //    setState(calculate(action,state));
        
        console.log(`se ha pulsado el boton ${action.button.content} en el panel ${action.panel}`)

        setState(calculate(action,state));

    };

    // const [total, setTotal] = useState(null);
    // const [next, setNext] = useState(null);
    // const [operation, setOperation] = useState(null);

    return (<div>
        <DisplayController />
        <ButtonPanel name="num"
            buttons={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
            numbers
            action={actionHandler} />
        <ButtonPanel name="ops"
            buttons={['+', '-', '/', '*', '=']}
            operations action={actionHandler} />
        <ButtonPanel name="spc"
            buttons={['C', 'AC']}
            specials
            action={actionHandler} />
    </div>)
}


export default Calculator;