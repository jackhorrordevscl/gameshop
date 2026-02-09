import React from "react";
import "./categories.css";

function Categories({ games, reference }) {
  return (
    <section id="categories" className="categories" ref={reference}>
      <h1>Categorías</h1>
    </section>
  );
}

export default Categories;
