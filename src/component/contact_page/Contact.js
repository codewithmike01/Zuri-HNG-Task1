import React from 'react';
import { ContactConatiner } from './Contact.style';

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
              <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
              />
            </div>

            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="text" id="email" placeholder="yourname@email.com" />
          </div>

          <div className="textarea-container input-container">
            <label>Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I'll reply you as soon as possible..."
            />
          </div>

          <div className="checkbox">
            <div className="check">
              <input type="checkbox" name="agreement" />
            </div>
            <p className="agreement">
              You agree to providing your data to &#123;name&#125; who may
              contact you.
            </p>
          </div>

          <div className="btn-container">
            <button type="submit" className="btn">
              Send message
            </button>
          </div>
        </form>
      </div>
    </ContactConatiner>
  );
};

export default Contact;
