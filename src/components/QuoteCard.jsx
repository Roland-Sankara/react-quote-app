function QuoteCard(props){
    return (
        <div className="border-2 border-black p-4 rounded-lg w-2/5">
            <p>{props.text}</p>
            <p>--{props.author}</p>
        </div>
    )
}

export default QuoteCard;