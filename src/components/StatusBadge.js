import React from "react";

export default function StatusBadge({ success }) {
  let text = "Successful",
    color = "green",
    className = "green circular check small icon";

  if (!success) {
    text = "Failed";
    color = "red";
    className = "red circular x icon";
  }

  return (
    <span
      style={{
        border: "solid",
        borderColor: color,
        borderRadius: "30px",
        color: color,
        fontSize: "10px",
        padding: "8px",
        textAlign: "center",
        marginLeft: "8px",
      }}
    >
      <i className={className} />
      {text}
    </span>
  );
}
