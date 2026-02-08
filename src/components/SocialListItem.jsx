import React from "react";

function SocialListItem({ item }) {
  return (
    <li>
      <a href="#">
        <i className={`bi ${item.icon}`}></i>
      </a>
    </li>
  );
}

export default SocialListItem;
