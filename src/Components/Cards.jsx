import React from "react";
import style from "./Cards.module.css";
import cart from "./pngegg.png";

const Cards = () => {
  return (
    <div className={style.cardBody}>
      <div className={style.CardImage}>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51RcxiQNx9L._AC_SX522_.jpg"
          alt=""
        />
        <div className={style.hoverText}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
            alias? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Totam, alias?
          </p>
        </div>
      </div>
      <div className={style.CardText}>
        <h2>Tata Tea Gold</h2>
        <p>100 gms</p>
        <p>Rs. 465/-</p>
      </div>
      <div className={style.CardButton}>
        <button>
          <img src={cart} alt="" /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
