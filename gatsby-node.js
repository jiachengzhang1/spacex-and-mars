const { fetchSpaceXData, fetchNASAData } = require("./fetch-api-data");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  const spacexData = await fetchSpaceXData();
  const nasaData = await fetchNASAData();

  const spacexNodeContent = JSON.stringify(spacexData);
  const nasaNodeContent = JSON.stringify(nasaData);

  createNode(
    Object.assign({}, nasaData, {
      id: createNodeId(`nasa-data`),
      parent: null,
      children: [],
      internal: {
        type: `nasaData`,
        mediaType: `text/html`,
        content: nasaNodeContent,
        contentDigest: createContentDigest(nasaData),
      },
    })
  );

  createNode(
    Object.assign({}, spacexData, {
      id: createNodeId(`spacex-data`),
      parent: null,
      children: [],
      internal: {
        type: `spacexData`,
        mediaType: `text/html`,
        content: spacexNodeContent,
        contentDigest: createContentDigest(spacexData),
      },
    })
  );
};
