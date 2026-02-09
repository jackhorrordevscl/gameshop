import React from "react";
import "./myLibrary.css";

function MyLibrary({ games, reference }) {
  return (
    <section id="library" className="library" ref={reference}>
      <h1>Mi Biblioteca</h1>
    </section>
  );
}

export default MyLibrary;
