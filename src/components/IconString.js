import React from "react";

export default function ({ iconClass, string }) {
  return (
    <p className="font-italic">
      <i className={iconClass} />
      {string}
    </p>
  );
}
