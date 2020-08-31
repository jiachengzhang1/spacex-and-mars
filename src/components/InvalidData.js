import React from "react";
import "./InvalidData.css";

export default function InvalidData( {source, link} ) {
  const word = "Weathers on Mars";
  return (
    <div className="invalid-data">
      <p>
        Data for "{word}" is not available at the moment, please check back or visit{" "} 
        <a target="_blank" href={link}>{source} API</a> for updates.
      </p>
    </div>
  );
}