import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card.jsx";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions.js"
import s from "./favorites.module.css"

const Favorites = (props) => {
    console.log(props.myFavorites);
    const dispatch = useDispatch()
    
  return (
    <div>
          <div className={s.barraFav}>
            <select className={s.select1} onChange={(e)=>dispatch(orderCards(e.target.value))} >
              <option className={s.option} value="Ascendente">Ascendente</option>
              <option className={s.option} value="Descendente">Descendente</option>
            </select>
    
              <select className={s.select1} onChange={(e) => dispatch(filterCards(e.target.value))} >
              <option className={s.option} value="ALL">Todos</option>
              <option className={s.option} value="Male">Masculino</option>
              <option className={s.option} value="Female">Femenino</option>
              <option className={s.option} value="Genderless">Sin Genero</option>
              <option className={s.option} value="unknown">Desconocido</option>
            </select>
          </div>

      {props.myFavorites.map((fav) => (
        <Card
          name={fav.name}
          id={fav.id}
          species={fav.species}
          gender={fav.gender}
          image={fav.image}
          key={fav.id}
        />
      ))}
    </div>
  );
};
function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
