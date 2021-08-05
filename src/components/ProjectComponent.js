import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import placeholder from '../images/abstract-q-g-250-125-2.jpg'

class ProjectComponent extends Component {
    render() {
        return (
            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Travel App </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href="https://github.com/HeartyRhombus/travel_client"><img src="" alt="GitHub"></img></a>
                            <a href=""><img src="" alt="YouTube"></img></a>
                        </Card.Footer>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Test 2 </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href=""><img src="" alt="GitHub"></img></a>
                            <a href=""><img src="" alt="YouTube"></img></a>
                        </Card.Footer>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Test 3 </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <a href=""><img src="" alt="GitHub"></img></a>
                            <a href=""><img src="" alt="YouTube"></img></a>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default ProjectComponent;
