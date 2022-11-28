import "./App.css";
import Cards from "./components/Cards.jsx";
import BarraSup from "./components/NavSup/BarraSup.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Forms from "./components/Forms/Forms.jsx";
import { useState,useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation()
  const navigate = useNavigate();
  const username = 'saanti_arguello@hotmail.com';
  const password = 'Rickmorty1';

  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }
  
  useEffect(() => {
  !access && navigate('/');
  }, [access]);
  
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>{location.pathname !== "/" && <BarraSup />}</div>
      <Routes>
        <Route path="/" element={ <Forms  login={login} /> } />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
