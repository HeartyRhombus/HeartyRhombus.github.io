import React, { Component } from 'react';
import AboutComponent from '../components/AboutComponent';

class AboutContainer extends Component {
    render() {
        return (
            <div>
                <div id="welcome_msg">
                    Hi, I'm Kayla!
                    <br/>
                    Welcome & thanks for visiting!
                </div>
                <AboutComponent />
            </div>
        );
    }
}

export default AboutContainer;
