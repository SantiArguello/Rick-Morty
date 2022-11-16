import React from "react";
import s from "./card.module.css";

export default function Card(props) {
  return (
    <div className={s.Carta}>
      <img className={s.Img} src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <button className={s.btn} onClick={props.onClose}>
        <span className={s.Span}>CLOSE</span>
      </button>
    </div>
  );
}
