import React from "react";

const PastMissionImages = ({ images }) => {
  return images.map((image, i) => {
    return i <= 2 ? (
      <div
        key={i}
        className="card past-mission-image border-light"
        style={{ margin: "5px" }}
      >
        <img key={i} alt="mission" src={image} height="250px" />
      </div>
    ) : null;
  });
};

export default PastMissionImages;
