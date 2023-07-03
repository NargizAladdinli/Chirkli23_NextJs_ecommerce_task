import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fyln1er",
        "template_m3b0r7f",
        form.current,
        "tNQL6OpKEQo9Buspq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };
  return (
    <section id="send">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="googlemap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d67184.27092114638!2d50.02039233844149!3d40.49363690582994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2saz!4v1688074737706!5m2!1sru!2saz"></iframe>
            </div>
          </div>
          <div className="sendmesagge col-lg-6">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-input">
                <input
                  name="user_name"
                  className="input-control"
                  type="text"
                  placeholder="Enter your name"
                />
                <span>Pleas enter your Name</span>
              </div>
              <div className="form-input">
                <input
                  name="user_email"
                  className="input-control"
                  type="email"
                  placeholder="Enter your mail"
                />
                <span>Pleas enter your Email</span>
              </div>
              <div className="form-input">
                <input
                  name="subject"
                  className="input-control"
                  type="text"
                  placeholder="Enter your subject"
                />
              </div>
              <div className="form-input">
                <textarea
                name="message"
                  className="text input-control"
                  type="text"
                  placeholder="Enter your message"
                />
              </div>
              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contacts;
