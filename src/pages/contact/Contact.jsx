import React from 'react'
import './Contact.scss'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Sidebar from '../../components/sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../../components/navbar/Navbar';
import { faEnvelope, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [success, setSuccess] = useState(false);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_oaam8rt', 'template_8hhkpjv', e.target, 'Hz_2gMnkyAJ_9rEH6')
      .then((result) => {
        setSuccess(!success)
      }, (error) => {
        console.log(error.text);
      });
  }
  return (
    <div>
      <div className="contact">
        <Sidebar />
        <div className="contactContainer">
          <Navbar />
          <div className="content">
              <div className="contact-left col-md-4">

           
            <div className="contact-item">
              <span><FontAwesomeIcon /></span>
              <p>82/61 Nguyen Luong Bang Street, Lien Chieu, Da Nang</p>
            </div>
            <div className="contact-item">
              <span><FontAwesomeIcon icon={faPhone} /></span>
              <p>0979259510</p>
            </div>
            <div className="contact-item">
              <span><FontAwesomeIcon icon="fa-regular fa-envelope" /></span>
              <p>manhnghean183286@gmail.com</p>
            </div>


          </div>
          <div className="col-md-6">
            <form className="contact-form" onSubmit={sendEmail}>
              {/* <input className="form-control" type="hidden" name="contact_number" /> */}
              <label>Name</label>
              <input className="form-control" placeholder="Your name" type="text" name="from_name" />
              <label>Email</label>
              <input className="form-control" placeholder="Your Email Address" type="email" name="user_email" />
              <label>Message</label>
              <textarea className="form-control" placeholder="How can i help you?" name="message" />
              <input className="btn brand-btn px-5 mt-3" type="submit" value="Send Message" />
              {
                success ? <p className="text-success">Email sent successfully</p> : ''
              }
            </form>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}
