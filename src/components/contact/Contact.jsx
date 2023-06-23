import React, { useEffect } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
// import {BsWhatsapp} from 'react-icons/bs'
import { TbPhoneCalling } from "react-icons/tb";
import { useRef } from "react";
import emailjs from "emailjs-com";
// import {FaGithub} from 'react-icons/fa'
// import img from '../../assets/girl.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xy70fdn",
        "template_kqclgvb",
        form.current,
        "gNjbswRxjXv5qe6BL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 data-aos="zoom-in-down">Get In Touch</h5>
      <h2 data-aos="zoom-in-down">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options" data-aos="zoom-in-right">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>wadhemanisha@gmail.com</h5>
            <a href="mailto:wadhemanisha@gmail.com" target="_blank">
              Send a Mail
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>Linked In</h4>
            <h5>Manisha Wadhe</h5>
            <a
              href="https://www.linkedin.com/in/manisha-wadhe-27725014a/"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <TbPhoneCalling className="contact__option-icon" />
            <h4>Call on</h4>
            <h5>+91 8975688865</h5>
            <a href="https://wa.me/918975688865" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <FaGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>manishawadhe</h5>
            <a href="https://github.com/manishawadhe" target="_blank">
              See my stats
            </a>
          </article>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
          {/* <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button> */}
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"
            alt=""
            style={{ borderRadius: "20%" }}
            data-aos="zoom-in-left"
          />
        </form>
      </div>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#8b068d",
          marginTop: "50px",
          textAlign: "center",
          justifyContent: "center",
          padding: "30px",
          
        }}
      >
        Made By Manisha Wadhe
      </div>
    </section>
  );
};

export default Contact;
