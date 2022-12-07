import React from "react";
import s from "./About.module.css"
import { useNavigate } from "react-router-dom";

export default function About(props) {

  const navigate = useNavigate()
  return (
    <div className={s.aboutDiv}>
      <h1 className={s.aboutH1}>Rick & Morty</h1>
      <p className={s.aboutP}>Rick y Morty es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013.</p><p className={s.aboutP}>La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos.</p>

      <h1 className={s.aboutH1}>Aplicacion</h1>
      <p className={s.aboutP}>La aplicación tiene como principio obtener la información de todos los personajes existentes del universo de la serie y poder ver en cuales capitulos hizo su aparición</p>
      
      <h1 className={s.aboutH1}>Nosotros</h1>
      <p className={s.aboutP}>Mi nombre es <a className={s.aboutA} href="https://www.instagram.com/saanti_arguello/" rel="yo">Santiago Arguello</a> , autor de la Pag en la cual nos encontramos. Este es mi primer proyecto, el cual realicé para el BootCamp Soyhenry en el módulo de FrontEnd.</p>
      <p className={s.aboutP}>Mencionando y agradeciendo a nuestro equipo de trabajo los cuales pueden encontrar grandes proyectos también en ellos. <a className={s.aboutA} href="https://www.instagram.com/agustinpetrini/" rel="Agustin">Agustin Petrini</a> , <a className={s.aboutA} href="https://www.instagram.com/jonathanmolero/" rel="Jhona">Jonathan Molero</a> y <a className={s.aboutA} href="https://www.instagram.com/jhontattoo/" rel="Jhona">Jhon Ruiz</a> </p>
       <div className={s.aboutBarra} >
      <button className={s.aboutButton} onClick={() => {
              navigate("/home");
            }} ><span className={s.aboutSpan} >VOLVER</span></button>
</div>
    </div>
  );
}
