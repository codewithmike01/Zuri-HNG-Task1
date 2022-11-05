import React, { useState } from 'react';
import { ContactContainer } from './Contact.style';
import { formValidation } from './service';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState({ value: '', err: false });
  const [lastName, setLastName] = useState({ value: '', err: false });
  const [email, setEmail] = useState({ value: '', err: false });
  const [textarea, setTextarea] = useState({ value: '', err: false });
  const [check, setCheck] = useState({ value: false, err: false });

  // Handle show error
  const showErr = (errVal) => {
    for (const el of errVal) {
      switch (el) {
        case 'firstName':
          setFirstName({ ...firstName, err: true });
          break;
        case 'lastName':
          setLastName({ ...lastName, err: true });
          break;
        case 'email':
          setEmail({ ...email, err: true });
          break;
        case 'textarea':
          setTextarea({ ...textarea, err: true });
          break;
        case 'check':
          setCheck({ ...check, err: true });
          break;
        default:
          return 'err';
      }
    }
  };

  // Handle Event Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      textarea: textarea.value,
      check: check.value,
    };
    let result = formValidation(formData);
    result.length === 2 ? showErr(result[1]) : navigate('/');
  };
  return (
    <ContactContainer>
      <div className="contact-wrapper">
        <h2>Contact Me</h2>

        <p>Hi there, contact me to ask me about anything you have in mind.</p>

        <div className="formContainer">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="username">
              <div className="input-container">
                <label>First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  value={firstName.value}
                  onChange={(e) =>
                    setFirstName({ err: false, value: e.target.value })
                  }
                  className={firstName.err ? 'border-err' : ''}
                />
                {firstName.err && (
                  <span className="error-msg">Please enter first name</span>
                )}
              </div>

              <div className="input-container">
                <label>Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  value={lastName.value}
                  onChange={(e) =>
                    setLastName({ err: false, value: e.target.value })
                  }
                  className={lastName.err ? 'border-err' : ''}
                />
              </div>
              {lastName.err && (
                <span className="error-msg">Please enter last name</span>
              )}
            </div>

            <div className="input-container">
              <label>Email</label>
              <input
                type="email"
                id="email"
                placeholder="yourname@email.com"
                value={email.value}
                onChange={(e) =>
                  setEmail({ err: false, value: e.target.value })
                }
                className={email.err ? 'border-err' : ''}
              />
              {email.err && (
                <span className="error-msg">Please enter an email</span>
              )}
            </div>

            <div className="textarea-container input-container">
              <label>Message</label>
              <textarea
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                value={textarea.value}
                onChange={(e) =>
                  setTextarea({ err: false, value: e.target.value })
                }
                className={textarea.err ? 'border-err' : ''}
              />
              {textarea.err && (
                <span className="error-msg">Please enter a message</span>
              )}
            </div>

            <div className="checkbox">
              <div className="checkbox-wrapper">
                <div className="check">
                  <input
                    type="checkbox"
                    name="agreement"
                    value={check.value}
                    onChange={(e) => {
                      setCheck((prevState) => ({
                        ...check,
                        value: !prevState,
                      }));
                    }}
                    className={check.err ? 'check-err' : ''}
                  />
                </div>
                <p className="agreement">
                  You agree to providing your data to &#123;name&#125; who may
                  contact you.
                </p>
              </div>
              {check.err && (
                <span className="error-msg">Please enter check the box</span>
              )}
            </div>

            <div className="btn-container">
              <button type="submit" className="btn" id="btn__submit">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};

export default Contact;
