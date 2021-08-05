import React, { Component } from 'react';
import liLogo from '../images/linkedin-black-icon.png'
import githubLogo from '../images/GitHub-Mark-120px-plus.png'
import medLogo from '../images/Medium-Symbol-Black-RGB@4x.png'
import emLogo from '../images/email-transparent-icon-4.png'

class ContactComponent extends Component {
    render() {
        return (
            <>
                Please feel free to reach out to me here:
                <br/>
                <br/>
                <a href="">
                    <img
                        src={liLogo}
                        height="120px"
                        title="LinkedIn"
                        alt="LinkedIn"
                    />
                </a>
                <a href="">
                    <img
                        src={githubLogo}
                        title="GitHub"
                        alt="GitHub"
                    />
                </a>
                <a href="">
                    <img
                        src={medLogo}
                        height="120px"
                        title="Blog"
                        alt="Blog"
                    />
                </a>
                <a href="mailto:kayla.budzeak@icloud.com">
                    <img
                        src={emLogo}
                        height="120px"
                        title="Email Me"
                        alt="Email"
                    />
                </a>
            </>
        );
    }
}

export default ContactComponent;
