import React from "react";

function headerListItem({ item }) {
  return (
    <a href={item.target} className={item.name}>
      <i className={`bi ${item.icon}`}></i>
      <span className={item.spanClass}>0</span>
    </a>
  );
}

export default headerListItem;
