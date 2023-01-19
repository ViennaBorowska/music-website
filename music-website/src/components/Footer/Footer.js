import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
              href="https://www.github.com/ViennaBorowska"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="footer-links fa-2x"
              href="https://www.linkedin.com/in/vienna-b-108b04229/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="footer-links fa-2x"
              href="mailto:thecentrum@aol.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
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
