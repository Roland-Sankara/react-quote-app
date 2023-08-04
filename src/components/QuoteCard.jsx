import {useContext} from 'react';
import { AppContext } from '../context/AppContext';

function QuoteCard(props){
    const context = useContext(AppContext);

    return (
        <div className={`border-2 ${context.theme == "light" ? "border-black" : "border-white"} p-4 rounded-lg w-2/5`}>
            <p>{props.text}</p>
            <p>--{props.author}</p>
        </div>
    )
}

export default QuoteCard;