import React, { Component } from "react"

class Journey extends Component {
  render() {
    return (
      <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        <h4 className="hr-title" id="my-journey-title">
          My Journey
        </h4>
        <p style={{ marginTop: "25px" }}>
          <i>
            "Tell me about yourself / How did you get into Software
            Engineering?"
          </i>
        </p>
        <p>
          I'm so glad you asked. Quite honestly, I fell into software
          engineering by complete accident.
        </p>
        <p style={{ textAlign: "justify" }}>
          I, like many others, lost my job due to COVID-19; I was working for a
          cruise line at the time. I took some time to try and figure out what
          to do next, after realizing that I probably wouldn't be able to go
          back to the travel industry for an extended period of time, and ended
          up taking career quizzes.
          <br />
          <br />
          I know, I did the thing that everyone tells you not to do...
          <br />
          <br />
          But I ended up finding out that coding might be a good fit for me, and
          found a bootcamp, Flatiron School, that would help me make the career
          change. I decided to go the full-time, five month, route, began in
          September 2020 and graduated on time in February 2021.
          <br />
          <br />
          I would be lying if I didn't say the job search afterwards wasn't
          hard, and at times it definitely had me second guessing my decision.
          But I was able to find an early career role, with a year long starting
          program to help integrate into the company, and am still there and
          loving it!
          <br />
          <br />I can honestly say that this has been a life-changing and
          worthwhile expedition, even with all of the challenges it presented
          before I even started. But for those looking to change careers and get
          in to tech, all of it is worth it in the end.
        </p>
      </div>
    )
  }
}

export default Journey
