import React from "react";
import "./header.css";
import userImg from "../images/user.jpg";

function Header({ toggleActive }) {
  return (
    <header>
      <a href="#" className="menu" onClick={toggleActive}>
        <i className="bi bi-sliders"></i>
      </a>
      <div className="userItems">
        <a href="#" className="icon">
          <i className="bi bi-heart-fill"></i>
          <span className="like">0</span>
        </a>
        <a href="#" className="icon">
          <i class="bi bi-bag-fill"></i>
          <span className="bag">0</span>
        </a>
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
