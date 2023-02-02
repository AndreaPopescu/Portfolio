
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import contact from '../../assets/contact-img.png';
function Contact() {
  
  const form = useRef();  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1zg34n3', 'template_rm26ge1', form.current, 'Q0L8GaIrbCx34QwFe')
      .then((result) => {
        document.getElementById("confirmation").textContent= "Message sent succesfully";
        document.getElementById("confirmation").style.color = "green";
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
      }, (error) => {
        document.getElementById("confirmation").textContent= "Message not sent";
        document.getElementById("confirmation").style.color = "red";
      });
      setTimeout(() => {
        document.getElementById("confirmation").textContent= "";
      }, 5000);
  };
  return (
    <section id='Contact'>
      <div className='container'>
        <h1>Contact Me</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input className='name' type='text' name='name' id='name' placeholder='Your Name' required></input>          
          <input className='email' type='email' name='email' id='email' placeholder='Your Email' required></input>
          <textarea className='message' name='message' id='message' rows='7' placeholder='Your Message' required></textarea>
          <div className="submit-container">
            <button className='btn-submit' type='submit' value="Send">Send Message</button>
            <p id='confirmation'></p>
          </div>
        </form>
      </div>
      <img src={contact} alt=''/>
    </section>
  );
}

export default Contact;