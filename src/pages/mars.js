import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Mars from "../components/Mars";

const MarsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Weather on Mars</title>
      </Helmet>
      <Mars />
    </Layout>
  );
};

export default MarsPage;
