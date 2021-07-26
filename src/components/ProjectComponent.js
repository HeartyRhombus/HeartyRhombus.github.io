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
                            <Card.Title> Test 1 </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Test 2 </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src={placeholder} />
                        <Card.Body>
                            <Card.Title> Test 3 </Card.Title>
                            <Card.Text> Test Description Placeholder </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default ProjectComponent;
