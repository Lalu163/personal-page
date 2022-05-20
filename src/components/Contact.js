import React from 'react';
import "./Contact.css";
import mail from "../assets/icons/mail.png";
import mobile from "../assets/icons/mobil.png";
import linkedin from "../assets/icons/linkedin.png"
import github from "../assets/icons/github.png"
import resume from "../assets/icons/resume.png"

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
                <div className="link-icons">
                    <a href="https://www.linkedin.com/in/laura-contreras-pulgar-77832320a/" target="_blank" rel="noreferrer">
                        <img title="linkedin"  src={linkedin} className="linkedin-icon"/>
                    </a>
                    <a href="https://github.com/Lalu163" target="_blank" rel="noreferrer">
                    <img src={github} className="github-icon"/>
                    </a>
                    <a href="https://www.canva.com/design/DAFBK7Kj2Hk/cs2vVbC1k9eha3LjBaMiGQ/view?utm_content=DAFBK7Kj2Hk&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" target="_blank" rel="noreferrer">
                    <img src={resume} className="resume-icon"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;