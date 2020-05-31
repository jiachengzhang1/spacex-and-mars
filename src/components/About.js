import "./About.css";
import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>
        It's always excited and amazed when think of being able to flying to
        Mars in this lifetime.
      </p>
      <p>
        And of course, appreciate the hard work for all of those who devoted
        their careers to human space development{" "}
        <span role="img" aria-label="rocket">
          🚀🚀🚀
        </span>
      </p>
      <p>
        The website leverages{" "}
        <a
          href="https://github.com/r-spacex/SpaceX-API"
          rel="noopener noreferrer"
          target="_blank"
        >
          SpaceX API
        </a>{" "}
        and{" "}
        <a
          href="https://api.nasa.gov/"
          rel="noopener noreferrer"
          target="_blank"
        >
          NASA API
        </a>{" "}
        to display SpaceX's mission information and the weather on Mars. It's
        written using ReactJS, Bootstrap. This site is not for commercial use,
        and doesn't have relations to either SpaceX or NASA in any kinds.
      </p>

      <div className="in development">
        <p>The site is still in development, will be updated frequently...</p>
      </div>
      <div className="find-me">
        <p>
          Find me on{" "}
          <a
            href="https://github.com/jiachengzhang1"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>{" "}
          or{" "}
          <a
            href="https://www.jzhangdeveloper.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            My Website
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
