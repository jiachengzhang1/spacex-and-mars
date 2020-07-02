import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import About from "../components/About";

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About</title>
      </Helmet>
      <About />
    </Layout>
  );
}
