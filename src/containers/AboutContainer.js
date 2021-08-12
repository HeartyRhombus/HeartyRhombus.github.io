import React, { Component } from 'react';
import AboutComponent from '../components/AboutComponent';
import Journey from '../components/Journey'
import TechStack from '../components/TechStack'
import profilePic from '../images/IMG_2745.JPG'


class AboutContainer extends Component {
    render() {
        return (
            <div>
                <div id="welcome_msg">
                    <img
                        id="profile_pic"
                        src={profilePic}
                        alt="profile headshot"
                    />
                    <br/>
                    Hi, I'm Kayla!
                    <br/>
                    Welcome & thanks for visiting!
                </div>
                <AboutComponent />
                <Journey />
                <TechStack />
            </div>
        );
    }
}

export default AboutContainer;
