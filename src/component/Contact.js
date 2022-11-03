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
        </form>
      </div>
    </ContactConatiner>
  );
};

export default Contact;
