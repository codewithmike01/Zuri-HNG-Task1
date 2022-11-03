import React from 'react';
import { ContactConatiner } from './home/style/Contact.style';

const Contact = () => {
  return (
    <ContactConatiner>
      <h2>Contact Me</h2>

      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <div className="formContainer">
        <form>
          <div className="username">
            <div className="input-container">
              <label>First name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>

            <div className="input-container">
              <label>Last name</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="text" placeholder="yourname@email.com" />
          </div>

          <div className="textarea-container input-container">
            <label>Message</label>
            <textarea placeholder="Send me a message and I'll reply you as soon as possible..." />
          </div>

          <div className="checkbox">
            <input type="checkbox" name="agreement" className="check" />
            <p className="agreement">
              You agree to providing your data to &#123;name&#125; who may
              contact you.
            </p>
          </div>
        </form>
      </div>
    </ContactConatiner>
  );
};

export default Contact;
