import React, { Component } from 'react';
import ContactComponent from '../components/ContactComponent';

class ContactContainer extends Component {
    render() {
        return (
            <div>
                <h4 className="hr-title" id="contact-title">
                Thanks for visiting my portfolio!
                </h4>
                <br/>
                <ContactComponent />
            </div>
        );
    }
}

export default ContactContainer;
