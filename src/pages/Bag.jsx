import React, { useState, useEffect } from "react";
import "./bag.css";
import ShopBagItem from "../components/ShopBagItem";

function Bag({ games, reference }) {
  const [total, setTotal] = useState(0);
  const handleTotalPayment = () => {
    return games
      .map((game) => game.price * (1 - game.discount))
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toFixed(2);
  };

  useEffect(() => {
    setTotal(handleTotalPayment());
  }, [games]);

  return (
    <section id="bag" className="bag" ref={reference}>
      <div className="container-fluid">
        <div className="row mb-3">
          <h1>Mi Mochila</h1>
        </div>
      </div>
      {games.length === 0 ? (
        <h2>Tu Mochila está Vacía</h2>
      ) : (
        <>
          <div className="row">
            <div className="table-responsive">
              <table className="shopBagTable table table-borderless align-middle">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Vista Previa</th>
                    <th scope="col">Juego</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Forma de Pago</th>
                    <th scope="col">Quitar</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, index) => (
                    <ShopBagItem index={index} key={game._id} game={game} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row d-flex justify-content-between mt-5">
            <div className="col-lg-2 d-flex alig-items-center">
              <p className="itemCount">Total de Items: {games.length}</p>
            </div>
            <div className="col-lg-10 d-flex justify-content-end">
              <div className="payment">
                Total: {total}
                <a href="#">
                  Pagar <i className="bi bi-wallet-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Bag;
