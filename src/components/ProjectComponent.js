import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import placeholder from '../images/abstract-q-g-250-125-2.jpg'
import github from '../images/GitHub-Mark-32px.png'
import youtube from '../images/youtube_social_icon_red.png'

class ProjectComponent extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Travel Bucket List App </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/travel_client" target="_blank">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/AQkeDlNPZko" target="_blank">
                            <img class="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                            <iframe
                                className="projDemoVid"
                                src="https://youtube.com/embed/6YGZMibcDJQ?rel=0&amp;modestbranding=1&amp;loop=1"
                                title="A video demonstration of my application built to be able to keep track of my library of books."
                                allowFullScreen
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title> Library App </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/javascript_project" target="_blank">
                                <img class="proj_icons" src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/6YGZMibcDJQ" target="_blank">
                                <img class="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> World of Warcraft Character Tracker </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/rails_project" target="_blank" >
                                <img class="proj_icons" src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/uz3ygkNOf04" target="_blank">
                                <img class="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default ProjectComponent;
