import React, { Component } from "react"
import { Card, CardGroup } from "react-bootstrap"
import github from "../images/project_icons/GitHub-Mark-32px.png"
import youtube from "../images/project_icons/youtube_black_icon.png"
// import demo from '../images/project_icons/demo-icon.png'
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
                url="https://www.youtube-nocookie.com/embed/AQkeDlNPZko"
              />
            </Card.Header>
            <Card.Body>
              <Card.Title> Travel Bucket List App </Card.Title>
              <Card.Text>
                {" "}
                An app to keep track of bucket list places I've been and would
                like to go to.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://github.com/HeartyRhombus/travel_client"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.youtube-nocookie.com/embed/AQkeDlNPZko"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={youtube} alt="YouTube" />
              </a>
              {/* <a href="#" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={demo} alt="Try Me" />
                            </a> */}
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <ReactPlayer
                className="projDemoVid"
                url="https://www.youtube-nocookie.com/embed/6YGZMibcDJQ"
              />
            </Card.Header>
            <Card.Body>
              <Card.Title> Library App </Card.Title>
              <Card.Text>
                {" "}
                An app to keep track of books I've read, or want to read.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://github.com/HeartyRhombus/javascript_project"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.youtube-nocookie.com/embed/6YGZMibcDJQ"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={youtube} alt="YouTube" />
              </a>
              {/* <a href="#" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={demo} alt="Try Me" />
                            </a> */}
            </Card.Footer>
          </Card>

          <Card>
            <Card.Header>
              <ReactPlayer
                className="projDemoVid"
                url="https://www.youtube-nocookie.com/embed/uz3ygkNOf04"
              />
            </Card.Header>
            <Card.Body>
              <Card.Title> World of Warcraft Character Tracker </Card.Title>
              <Card.Text>
                {" "}
                An app where I can collect my WoW characters, and their related
                details.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a
                href="https://github.com/HeartyRhombus/rails_project"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={github} alt="GitHub" />
              </a>
              <a
                href="https://www.youtube-nocookie.com/embed/uz3ygkNOf04"
                target="_blank"
                rel="noreferrer"
              >
                <img className="proj_icons" src={youtube} alt="YouTube" />
              </a>
              {/* <a href="#" target="_blank" rel="noreferrer">
                                <img className="proj_icons" src={demo} alt="Try Me" />
                            </a> */}
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    )
  }
}

export default ProjectComponent
