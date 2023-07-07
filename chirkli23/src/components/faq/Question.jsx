import { useState } from "react";


const Question = ({items}) => {
    const [selected, setSelected] = useState(null)
const toggle = (i) => {
    if(selected === i) {
        return setSelected(null)
    }

    setSelected(!selected)
}

    const {question, answer,} = items;

    return(
        <div className="item">
            <div onClick={toggle()} className="title">
                <h2>{question}</h2>
            </div>
            <div className={selected === toggle() ? "show" : "content"}>
                <p>{answer}</p>
            </div>
        </div>
    )
}
export default Question;