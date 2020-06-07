import React from "react";

export default function CountdownNum({ num, text, textFontSize, numFontSize }) {
  return (
    <div
      className="count-down-num text-center m-auto"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <div className="count-num" style={{ fontSize: numFontSize }}>
        {num < 10 ? `0${num}` : `${num}`}
      </div>
      <div className="count-text" style={{ fontSize: textFontSize }}>
        {text}
      </div>
    </div>
  );
}
