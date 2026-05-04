'use client'

import { YouTubeEmbed } from '@next/third-parties/google'
import Image from 'next/image'
import { Component } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import github from '../_images/project_icons/GitHub-Mark-32px.png'
import youtube from '../_images/project_icons/youtube_black_icon.png'

export default class ProjectComponent extends Component {
  render() {
    return (
      <>
        <div className="ProjectComponent">
          <h5> Current Projects</h5>
          <h2>Coming Soon!</h2>
        </div>
        <br />
        <br />
        <div className="ProjectComponent">
          <h5 style={{ fontStyle: 'italic' }}> Past Projects</h5>
          <p>
            These are some projects I completed while attending Flatiron School:
          </p>
          <CardGroup>
            <Card>
              <Card.Header>
                <YouTubeEmbed className="projDemoVid" videoId="AQkeDlNPZko" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Travel Bucket List App </Card.Title>
                <Card.Text>
                  An app to keep track of bucket list places I've been and would
                  like to go to.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="centered-icons">
                <a
                  href="https://github.com/HeartyRhombus/travel_client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.youtube-nocookie.com/embed/AQkeDlNPZko"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={youtube} alt="YouTube" />
                </a>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>
                <YouTubeEmbed className="projDemoVid" videoId="6YGZMibcDJQ" />
              </Card.Header>
              <Card.Body>
                <Card.Title> Library App </Card.Title>
                <Card.Text>
                  An app to keep track of books I've read, or want to read.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="centered-icons">
                <a
                  href="https://github.com/HeartyRhombus/javascript_project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.youtube-nocookie.com/embed/6YGZMibcDJQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={youtube} alt="YouTube" />
                </a>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Header>
                <YouTubeEmbed videoId="uz3ygkNOf04" />
              </Card.Header>
              <Card.Body>
                <Card.Title> World of Warcraft Character Tracker </Card.Title>
                <Card.Text>
                  An app where I can collect my WoW characters, and their
                  related information.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="centered-icons">
                <a
                  href="https://github.com/HeartyRhombus/rails_project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={github} alt="GitHub" />
                </a>
                <a
                  href="https://www.youtube-nocookie.com/embed/uz3ygkNOf04"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image className="proj_icons" src={youtube} alt="YouTube" />
                </a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </>
    )
  }
}
