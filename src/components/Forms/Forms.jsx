import React from "react";
import { useState } from "react";
import { validate } from "./validation.js";
import s from "./forms.module.css";

export default function Forms(props) {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
  };

    return (
        <div >
            <div>
        <img
          className="Title"
          src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
          alt=""
        />
      </div>
            

    <div className={s.divForms}>      
     <form onSubmit={handleSubmit}>
        <label className={s.labelUser}>Username   </label>
        <input
          placeholder="Escribe tu Email"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
                  className={errors.username && s.warning}
                  id ={s.inputUser}
              />
              <p className={s.danger}>{errors.username}</p>

        <label className={s.labelPass}>Password </label>
        <input
          placeholder="Escribe tu contraseña"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
                  className={errors.password && s.warning}
                  id={s.inputPass}
            />
         <p className={s.danger}>{errors.password}</p>

        <button className={s.botonForms} type="submit" ><span className={s.spanForms}>LOGIN</span></button>
          </form>
          <p>* Usuario : saanti_arguello@hotmail.com *  </p>
                <p>* Constraseña : Rickmorty1 * </p>
                </div>
    </div>
  );
}
