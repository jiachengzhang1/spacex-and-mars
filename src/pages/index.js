import "../components/Missions.scss";
import React from "react";

import Layout from "../components/Layout";
import FutureMission from "../components/FutureMissions";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <FutureMission />
      <div className="quote">
        <blockquote className="blockquote text-center">
          <p>
            If humanity doesn't land on Mars in my lifetime, I would be very
            disappointed.
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Elon Musk</cite>
          </footer>
        </blockquote>
      </div>
    </Layout>
  );
};

export default IndexPage;
