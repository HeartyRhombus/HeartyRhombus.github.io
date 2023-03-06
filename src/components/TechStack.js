import React, { Component } from "react"
import ts from "../images/tech_stack/ts_logo.png"
import bamboo from "../images/tech_stack/bamboo_logo.png"
// import react from "../images/tech_stack/react_logo.png"
// import redux from "../images/tech_stack/redux_logo.png"
import js from "../images/tech_stack/js_logo.png"
// import ror from "../images/tech_stack/RoR_logo.png"
// import html from "../images/tech_stack/html_logo.png"
// import css from "../images/tech_stack/css_logo.png"
// import sql from "../images/tech_stack/sql_logo.png"

class TechStack extends Component {
  render() {
    return (
      <>
        <h4 className="hr-title" id="tech-stack-title">
          Current Technical Skills
        </h4>
        <p id="tech_logos">
          <img className="tech_icons" src={js} alt="JavaScript" title="JavaScript" />
          <img className="tech_icons" src={ts} alt="TypeScript" title="TypeScript" />
          <img className="tech_icons" src={bamboo} alt="Bamboo" title="Bamboo" />
          {/* Flatiron Learned Skills */}
          {/* <img className="tech_icons" src={react} alt="React" title="React" />
          <img className="tech_icons" src={redux} alt="Redux" title="Redux" /> */}
          {/* <img className="tech_icons" src={ror} alt="Ruby on Rails" title="Ruby on Rails" /> */}
          {/* <img className="tech_icons" src={html} alt="HTML" title="HTML" /> */}
          {/* <img className="tech_icons" src={css} alt="CSS" title="CSS" /> */}
          {/* <img className="tech_icons" src={sql} alt="SQL" title="SQL" /> */}
        </p>
      </>
    )
  }
}

export default TechStack
