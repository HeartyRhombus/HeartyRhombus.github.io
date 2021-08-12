import React, { Component } from 'react';
import resume from '../images/contact_icons/resume-png-resume-icon-1600.png'
import liLogo from '../images/contact_icons/linkedin-black-icon.png'
import githubLogo from '../images/contact_icons/GitHub-Mark-120px-plus.png'
import medLogo from '../images/contact_icons/Medium-Symbol-Black-RGB@4x.png'
import emLogo from '../images/contact_icons/email-transparent-icon-4.png'

class ContactComponent extends Component {
    render() {
        return (
            <>
                <p style={{fontSize: "1.5rem"}}>Please feel free to reach out to me here:</p>
                <a href="https://docs.google.com/document/d/1f9mlikm--E2WgOVrZtntlICwVWWbh6HR9WSc0VXk-zM/edit?usp=sharing" target="_blank">
                    <img
                        className="contact-icon"
                        src={resume}
                        title="Resume"
                        alt="Resume"
                    />
                </a>
                <a href="https://www.linkedin.com/in/KaylaBudzeak" target="_blank">
                    <img
                        className="contact-icon"
                        src={liLogo}
                        title="LinkedIn"
                        alt="LinkedIn"
                    />
                </a>
                <a href="https://www.github.com/HeartyRhombus" target="_blank">
                    <img
                        className="contact-icon"
                        src={githubLogo}
                        title="GitHub"
                        alt="GitHub"
                    />
                </a>
                <a href="https://HeartyRhombus.medium.com" target="_blank">
                    <img
                        className="contact-icon"
                        src={medLogo}
                        title="Blog"
                        alt="Blog"
                    />
                </a>
                <a href="mailto:kayla.budzeak@icloud.com" target="_blank">
                    <img
                        className="contact-icon"
                        src={emLogo}
                        title="Email Me"
                        alt="Email"
                    />
                </a>
            </>
        );
    }
}

export default ContactComponent;
