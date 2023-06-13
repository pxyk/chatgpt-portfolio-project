import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Contact</h2>
      <form>
        <div>
          <label htmlFor="name">What is your name?</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Your email address:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">How can I help you?</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
