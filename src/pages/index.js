import React from "react";

import Layout from "../components/Layout";
import FutureMissions from "../components/FutureMissions";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <FutureMissions />
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
