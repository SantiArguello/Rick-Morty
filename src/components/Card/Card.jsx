import React from "react";
import s from "./card.module.css";
import { NavLink,useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import { useState, useEffect } from "react";

export function Card(props) {
const [isFav, setIsFav]= useState(false)

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false)
      props.deleteFavorites (props.id)
    } else if (isFav === false) {
      setIsFav(true)
      props.addFavorites(props)
   }
  }
  
  useEffect(() => {
    props.myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);
  
  return (
    <div className={s.Carta}>
        {useLocation().pathname !== '/favorites' && <button className={s.btn} onClick={() => props.onClose(props.id)}>
          <span className={s.Span}>CERRAR</span>
        </button> }

      <div className={s.corazonFav}>
      {isFav ? (
        <button className={s.corazon} onClick={handleFavorite}>❤️</button>
      ) : (
        <button className={s.corazon} onClick={handleFavorite}>🤍</button>
      )}
      </div>


      <div className={s.divImg}>
      <img className={s.Img} src={props.image} alt={props.name} />
      </div>

      {/* <h2>{props.species}</h2>
      <h2>{props.gender}</h2> */}

      <NavLink className={s.navLink} to={`/detail/${props.id}`}>
        <button className={s.cardBoton}>
          <span className={s.cardSpan}>{props.name}</span>
        </button>
      </NavLink>
      
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorites: (props) => dispatch(addFavorites(props)),
    deleteFavorites: (id)=> dispatch(deleteFavorites(id))
  }
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps,{addFavorites,deleteFavorites})(Card);