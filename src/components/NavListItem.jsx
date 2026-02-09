import React from "react";

function NavListItem({ item, navOnClick }) {
  return (
    <li>
      <a href="#" onClick={() => navOnClick(item._id)}>
        <i className={`bi ${item.icon}`}></i>
        <span className="navName">{item.name}</span>
      </a>
    </li>
  );
}

export default NavListItem;
