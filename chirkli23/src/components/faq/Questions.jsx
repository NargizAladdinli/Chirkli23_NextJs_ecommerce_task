import { useEffect, useState } from "react";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const faqFetch = async () => {
      const req = await fetch(
        "https://json-server-tan-kappa.vercel.app/questions"
      );
      const res = await req.json();
      setQuestions(res);
    };
    faqFetch();
  }, []);

  const [selected, setSelected] = useState();
  const toggle = (i) => {
    if (selected === i) {
      return setSelected();
    }

    setSelected(i);
  };
  return (
    <section id="questions">
      <div className="container">
        <h3>Frequently Asked Questions</h3>
        <div className="accordion">
          {questions.map((item, a) => {
            const { question, answer, id } = item;
            return (
              <div key={id} className="item">
                <div onClick={() => toggle(a)} className="title">
                  <h2>{question}</h2>
                  <span>{selected === a ? "-" : "+"}</span>
                </div>
                <div className={selected === a ? "show" : "content"}>
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
