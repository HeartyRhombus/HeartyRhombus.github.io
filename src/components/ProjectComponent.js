import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import placeholder from '../images/abstract-q-g-250-125-2.jpg'
import github from '../images/GitHub-Mark-32px.png'
import youtube from '../images/youtube_social_icon_red.png'
import ReactPlayer from "react-player"

class ProjectComponent extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card>
                        <Card.Header>
                            <ReactPlayer
                                className="projDemoVid"
                                url="https://youtu.be/AQkeDlNPZko"
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title> Travel Bucket List App </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/travel_client" target="_blank" rel="noreferrer">
                                <img src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/AQkeDlNPZko" target="_blank" rel="noreferrer">
                            <img className="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Header>
                            <ReactPlayer
                                className="projDemoVid"
                                url="https://youtube.com/embed/6YGZMibcDJQ"
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title> Library App </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/javascript_project" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/6YGZMibcDJQ" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>

                    </Card>
                    <Card>
                        <Card.Header>
                            <ReactPlayer
                                className="projDemoVid"
                                url="https://youtu.be/AQkeDlNPZko"
                            />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title> World of Warcraft Character Tracker </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/rails_project" target="_blank"  rel="noreferrer">
                                <img className="proj_icons" src={github} alt="GitHub" />
                            </a>
                            <a href="https://youtu.be/uz3ygkNOf04" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={youtube} alt="YouTube" />
                            </a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default ProjectComponent;
