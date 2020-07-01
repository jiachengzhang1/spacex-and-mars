import React from "react";
import { Helmet } from "react-helmet";
import PastMissions from "../components/PastMissions";
import Layout from "../components/Layout";

const PastMissionsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Past Missions</title>
      </Helmet>
      <PastMissions />
    </Layout>
  );
};

export default PastMissionsPage;
