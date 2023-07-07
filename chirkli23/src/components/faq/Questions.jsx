import { useEffect, useState } from "react";


const Questions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        const faqFetch = async() => {
            const req = await fetch('https://json-server-tan-kappa.vercel.app/questions');
            const res = await req.json()
            // console.log(res);
            setQuestions(res);
        }
        faqFetch()
    },[])
    return (
        <section id="questions">
            <div className="container">
                <div className="row-questions">
                    {questions.map((item) => {
                        
                    })}
                </div>
            </div>
        </section>
    )
}
export default Questions;