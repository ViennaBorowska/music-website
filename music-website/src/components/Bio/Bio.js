import React from "react";
import "./Bio.css";

export default function Bio() {
  return (
    <section className="bio-background">
      <div className="bio-container">
        <div className="will-fadeIn">
          <p className="bio-txt">
            "One of the hitherto-unacknowledged people, products and 'things{" "}
            <br></br> that have helped shape rock'n'roll - such has <br></br>
            been the lift of Mr Unsung Personified" <br></br>- <i>Q Magazine</i>
          </p>
        </div>
        <div className="will-fadeIn">
          <p className="bio-txt-2">
            "As a first step towards an appreciation of <br></br> George
            Borowski's contribution to music, consider the following - <br></br>
            George’s consistent motto is one that undoubtedly <br></br> connects
            his epic music with the music of others." <br></br>-
            <i>Jim Sutherland, BBC Manchester Introducing</i>
          </p>
        </div>
        <div className="will-fadeIn">
          <p className="bio-txt-3">
            "I have never seen a rock'n'roll <br></br>performer so completely
            connected <br></br> with what he was doing onstage." <br></br> -
            <i>Frank Black, Pixies</i>
          </p>
        </div>
        <div className="will-fadeIn">
          <p className="bio-txt-4">
            George has an uncanny ability to straddle the divide <br></br> and
            deliver a message to all camps." <br></br> -{" "}
            <i>Terry Christian, The Word</i>
          </p>
        </div>
        {/* <div className="logo-container">
        <div className="gb-logo"></div>
      </div> */}
      </div>
    </section>
  );
}
