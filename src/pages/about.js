import "../styles/About.css";
import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

import {
  SPACEX_API_LINK,
  NASA_API_LINK,
  GITHUB_LINK,
  MY_WEBSITE_LINK,
} from "../utils/constants";
import ATag from "../components/ATag";

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="about">
        <div className="about-container">
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
            <ATag href={SPACEX_API_LINK} text="SpaceX API" /> and{" "}
            <ATag href={NASA_API_LINK} text="NASA API" /> to display SpaceX's
            mission information and the weather on Mars. It's written using
            ReactJS, Bootstrap. This site is not for commercial use, and doesn't
            have relations to either SpaceX or NASA in any kinds.
          </p>

          <div className="in development">
            <p>
              The site is still in development, will be updated frequently...
            </p>
          </div>
          <div className="find-me">
            <p>
              Find me on <ATag href={GITHUB_LINK} text="GitHub" /> or{" "}
              <ATag href={MY_WEBSITE_LINK} text="My Website" />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
