import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media-contact">
          <div className="footer-link-holder">
            <a
              className="footer-links fa-2x"
              href="https://www.instagram.com/georgeborowskiofficial/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://open.spotify.com/artist/5dWPhkuy8t8HQLRtlwOseb"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a
              className="footer-links fa-2x"
              href="mailto:thecentrum@aol.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://www.facebook.com/GeorgeBorowskiOfficial/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://twitter.com/georgeborowski?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <FontAwesomeIcon icon="fa-light fa-copyright" />
          <p className="rights">
            {year} &copy; George Borowski - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
