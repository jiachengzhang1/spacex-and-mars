import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

const SEO = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
          siteUrl
        }
      }
    }
  `);

  const {
    title,
    author,
    description,
    siteUrl,
    // siteImageUrl,
  } = site.siteMetadata;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="author" content={author} data-react-helmet="true" />
      <meta name="description" content={description} data-react-helmet="true" />

      <meta property="og:type" content="website" data-react-helmet="true" />
      <meta
        property="og:image"
        content={require("../images/socialImage.jpg")}
      />
      <meta property="og:title" content={title} data-react-helmet="true" />
      <meta
        property="og:description"
        content={description}
        data-react-helmet="true"
      />
      <meta property="og:url" content={siteUrl} data-react-helmet="true" />

      <link
        rel="dns-prefetch"
        href="https://api.spacexdata.com/"
        data-react-helmet="true"
      />
    </Helmet>
  );
};

export default SEO;
