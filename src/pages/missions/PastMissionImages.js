import React from "react";

const PastMissionImages = ({ images }) => {
  return images.map((image, i) => {
    return i <= 2 ? (
      <div
        key={i}
        className="card border-light"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <img
          key={i}
          alt="missionImage"
          src={image}
          height="250px"
          style={{ margin: "5px" }}
        />
      </div>
    ) : null;
  });
};

export default PastMissionImages;
