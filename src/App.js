import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);
  


  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      <img
        className="Title"
        src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png"
        alt=""
      />
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
    </div>
  );
}

export default App;
