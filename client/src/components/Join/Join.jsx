import { useRef, useState } from "react";
import Axios from "axios";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");

  const addInfo = () => {
    Axios.post("http://localhost:8009/insert", {
      email: email,
      name: name,
      number: mobile,
    });
    alert("You did this right.");
    setemail("");
    setname("");
    setmobile("");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p00d29s",
        "template_kiprju7",
        form.current,
        "Pc4AAeIl1VWuoWKPR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span>WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <div className="blur blur-join"></div>
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            value={email}
            type="email"
            name="user_email"
            placeholder="Enter Your Email Address."
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            value={name}
            type="text"
            name="user_Name"
            placeholder="Enter Your Name."
            onChange={(e) => setname(e.target.value)}
          />
          <input
            value={mobile}
            type="text"
            name="mobile"
            placeholder="Enter Your Mobile No."
            onChange={(e) => setmobile(e.target.value)}
          />
          <button className="btn btn_join" onClick={addInfo}>
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
