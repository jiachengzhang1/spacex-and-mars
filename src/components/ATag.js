import React from "react";

export default function ATag({ href, text }) {
  return href === null ? null : (
    <a rel="noopener noreferrer" target="_blank" href={href}>
      {text}
    </a>
  );
}
