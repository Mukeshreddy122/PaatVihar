import React from "react";
import "./MailList.css";
const MailList = () => {
  return (
    <div className="mail">
      <h3 className="mailTitle">Save time,Save money</h3>
      <span className="mailDesc">Drop your query we will get in touch.</span>
      <div className="mailInputContainer">
        <form method="POST" action="https://formspree.io/f/xqkozwgd">
          <div className="formData">
            <div className="input1">
              <input type="text" placeholder="Name" className="mInput" name="name" />
            </div>
            <div className="input2">
              <input type="text" placeholder="email/phone" className="mInput" name="email"/>
            </div>
            <div className="input3">
              <textarea type="text" placeholder="Message" name="message"/>
            </div>
            <div className="input4">
            <button className="sendData">Send</button>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MailList;
