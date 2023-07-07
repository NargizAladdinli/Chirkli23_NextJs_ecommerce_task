import { useEffect, useState } from "react";
import Question from "./Question";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const faqFetch = async () => {
      const req = await fetch(
        "https://json-server-tan-kappa.vercel.app/questions"
      );
      const res = await req.json();
      // console.log(res);
      setQuestions(res);
    };
    faqFetch();
  }, []);

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section id="questions">
      <div className="container">
        <div className="accordion">
          {questions.map((item, i) => {
            const { question, answer, id } = item;
            return (
              <div key={id} className="item">
                <div onClick={() => toggle(i)} className="title">
                  <h2>{question}</h2>
                </div>
                <div className={selected === i ? "show" : "content"}>
                  {/* <p>{answer}</p> */}
                  {answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Questions;
