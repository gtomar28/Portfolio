import React from 'react'
import { Link } from 'react-router-dom'
import './ContactSectionComponent.css'

const ContactSectionComponent = () => {


  const handleEmailClick = () => {
    const emailAddress = 'your-email@example.com';
    const subject = 'Subject of your email';
    const body = 'Body of your email';

    // Constructing the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Opening the user's email client
    window.location.href = mailtoLink;
  };


  return (
    <>
      <div className="container-fluid py-5" id="contact">
        <div className="container">
          <div className="row text-white p-4"><h1 className='heading-h1 text-center'> Contact</h1></div>
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="contact-form text-center">
                      <div id="success"></div>
                      <form name="sentMessage" id="contactForm" noValidate="novalidate">
                          <div className="form-row d-flex">
                              <div className="control-group col-sm-6 pe-2">
                                  <input type="text" className="form-control formcontrolmain" id="name" placeholder="Your Name"
                                      required="required" data-validation-required-message="Please enter your name" />
                                  <p className="help-block text-danger"></p>
                              </div>
                              <div className="control-group col-sm-6 ps-2">
                                  <input type="email" className="form-control formcontrolmain" id="email" placeholder="Your Email"
                                      required="required" data-validation-required-message="Please enter your email" />
                                  <p className="help-block text-danger"></p>
                              </div>
                          </div>
                          <div className="control-group">
                              <input type="text" className="form-control formcontrolmain" id="subject" placeholder="Subject"
                                  required="required" data-validation-required-message="Please enter a subject" />
                              <p className="help-block text-danger"></p>
                          </div>
                          <div className="control-group">
                              <textarea className="form-control formcontrolmain" rows="10" id="message" placeholder="Message"
                                  required="required"
                                  data-validation-required-message="Please enter your message"></textarea>
                              <p className="help-block text-danger"></p>
                          </div>
                          <div>
                              <button className="btn btn-outline-primaryy" type="submit" id="sendMessageButton">Send
                                Message
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className="row mt-5">
            <div className="d-flex justify-content-center ">
              <Link className="p-2 ms-3 btn-social mr-2" to="https://github.com/gtomar28">
                <span  className='socialbtns p-2 align-self-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
                </span>
              </Link>
              <Link className="p-2 ms-3 btn-social mr-2" onClick={handleEmailClick()}>
                <span className='socialbtns p-2 align-self-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                </span>
              </Link>
              <Link className="p-2 ms-3 btn-social" to="https://www.linkedin.com/in/garima-tomar/">
                <span className='socialbtns p-2 align-self-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.5em" viewBox="0 0 24 24"><path fill="black" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"/></svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default ContactSectionComponent