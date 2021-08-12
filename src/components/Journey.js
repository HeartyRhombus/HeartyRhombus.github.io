import React, { Component } from 'react';

class Journey extends Component {
    render() {
        return (
            <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
                <h4 className="hr-title" id="my-journey-title">
                    My Journey
                </h4>
                <p style={{marginTop: "25px"}}>
                    <i>"Tell me about yourself / How did you get into Software Engineering?"</i>
                </p>
                <p>
                    I'm so glad you asked. Quite honestly, I fell into software engineering by complete accident, but please allow me to tell you how.
                </p>
                <p style={{textAlign: "justify"}}>
                    I, like many others, lost my job due to COVID-19; the cruise industry was extremely hard hit. When that happened I began trying to figure out what to do next with my career because, at the time, I didn't believe I would be able to go back into the travel industry for quite some time. So I started to look at some of my past passions, like Egyptology/Archaeology, and after discussing these with my family it was decided that we just couldn't afford for me to go back to school for another 8 years to get a doctorate before entering into that field.
                    <br/><br/>
                    So, in an effort to try and figure out my "what next?", I did what people tell you not to do and I took career quizzes, with the full understanding that I should view these as just a 'for fun' thing. But one result kept coming back, as if it were trying to give me a sign: 'Software Engineering/Web Development'. After coming to this realization I began to research this field, and found that it actually encompasses most, if not all, of my hobbies and things I like to do. But I couldn't afford to go back to school for at least another 2 to 4 years; enter coding bootcamps and Flatiron School.
                    <br/><br/>
                    Flatiron School was the best fit for me because it would allow me to enter into this new found career field relatively quickly, and it boasts relatively high placement percentages; meaning afterwards I should hopefully be able to land a new job in tech after successfully graduating. Luckily, my application to the school was accepted and I began my studies in September 2020 and went on to graduate in February 2021 from their Full-Time Online Software Engineering program.
                    <br/><br/>
                    And so here I am. I may be new to tech in my career, but being a 90s kid I have lived and grown up with tech my whole life. I am so glad I found coding (or did it find me?) because I can say with all honesty I genuinely enjoy the challenges it presents, and can't wait to see how far my new career path will take me!
                </p>
            </div>
        );
    }
}

export default Journey;
