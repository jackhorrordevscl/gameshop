import React, { useState } from "react";
import "./header.css";
import userImg from "../images/user.jpg";

import headerListData from "../data/headerListData";
import HeaderListItem from "../components/HeaderListItem";

function Header({ toggleActive }) {
  const [headerData, setHeaderData] = useState(headerListData);
  return (
    <header>
      {/* Botón de alternar menu lateral */}
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        {headerData.map((item) => (
          <HeaderListItem key={item._id} item={item} />
        ))}
        <div className="avatar">
          <a href="#">
            <img src={userImg} alt="User image" />
          </a>
          <div className="user">
            <span>JackHorror</span>
            <a href="#">Ver Perfil</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
