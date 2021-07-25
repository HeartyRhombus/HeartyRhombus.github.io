import React, { Component } from 'react';
import AboutComponent from '../components/AboutComponent';
import profilePic from '../images/kenjaminProfilePic.png'


class AboutContainer extends Component {
    render() {
        return (
            <div>
                <div id="welcome_msg">
                    <img
                        id="profile_pic"
                        src={profilePic}
                        alt="profile sketch"
                    />
                    <br/>
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
