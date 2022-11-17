import React from "react";
import s from "./searchBar.module.css"




export default function SearchBar(props) {
   return (
      <div className={s.Barra}>
         <input className={s.Input}  type='search' />
      <button className={s.Button} onClick={ props.onSearch }><span className={s.Span}>Agregar</span></button>
      </div>
   );
}
