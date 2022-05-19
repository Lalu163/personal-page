import React from 'react';
import "./Contact.css";
import mail from "../assets/icons/mail.png";
import mobile from "../assets/icons/mobil.png";

function Contact() {
    return (

        <div className="contact" id="contact">
            <div className="contact-container">
                <h1 className="contact-title">Contact</h1>
            </div>
            <div className="icon-container">
                <div className="mail-section">
                    <img src={mail} className="mail-icon"/>
                    <p className="mail">m.laura.cp89@gmail.com</p>
                </div>
                <div className="mobile-section">
                    <img src={mobile} className="mobile-icon"/>
                    <p className="mobile-phone">600 83 52 02</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;