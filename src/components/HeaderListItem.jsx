import React from "react";

function headerListItem({ item }) {
  return (
    <a href={item.target} className={item.name}>
      <i className={`bi ${item.icon}`}></i>
    </a>
  );
}

export default headerListItem;
