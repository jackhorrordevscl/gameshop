import React, { useState, useContext } from "react";
import "./header.css";
import { AppContext } from "../App";
import userImg from "../images/user.jpg";

import headerListData from "../data/headerListData";
import HeaderListItem from "../components/HeaderListItem";

function Header({ toggleActive }) {
  const { library, bag } = useContext(AppContext);
  const [headerData, setHeaderData] = useState(headerListData);
  return (
    <header>
      {/* Botón de alternar menu lateral */}
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">{library.length}</span>
        </a>
        <a href="#" className="icon">
          <i className="bi bi-bag-fill"></i>
          <span className="bag">{bag.length}</span>
        </a>
        {/* {headerData.map((item) => (
          <HeaderListItem key={item._id} item={item}>
            <span className="like">{library.length}</span>
          </HeaderListItem>
        ))} */}
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
