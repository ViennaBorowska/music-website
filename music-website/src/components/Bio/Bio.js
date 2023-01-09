import React from "react";
import "./Bio.css";
import gbImg from './GB-bw.png';

export default function Bio() {
  return (
    <section>
      <div className="bio-container">
        <div className="will-fadeIn">
          <img src={gbImg} alt="b&w of George Borowski"></img>
        </div>
        <div className="will-fadeIn">
          <p className="bio-txt">
            Hi there, I'm a junior fullstack developer based in Manchester, NW
            U.K. <br></br>
            <br></br>I am a fast learner in posession of a passion to do good,
            and a keen problem-solving mind. I like to approach problems like a
            detective solving a mystery, working ceaselessly and methodically
            until a solution is reached.
            <br></br>
            <br></br>I am highly organised with critical attention to detail, so
            I have found my skills well suited to back-end development - but I
            also have a strong creative flair and enjoy building attractive,
            accessible, responsive designs.
          </p>
        </div>
        {/* <div className="logo-container">
        <div className="gb-logo"></div>
      </div> */}
      </div>
    </section>
  );
}
