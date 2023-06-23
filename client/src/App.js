import style from "./App.module.css";
// import Card from './components/Card/Card';
import Cards from "./components/Cards/Cards";
// import SearchBar from './components/SearchBar/SearchBar';
// import characters from "./data.js";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Form from "./components/Form/Form";
import { Favorites } from "./components/Favorites/Favorites";
import axios from "axios";

// const onSearch = (id) => {
//   const URL_BASE = "htpps://be-a-rym.up.railway.app/api";
//   KEY = '2EDJFGJJGJBGJ';
//   fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
//   .then(response=>response.json())
//   .then(data=>{
//       if(data.name){
//          setCharacters((oldChars) => [...oldChars, data]);
//          // setCharacters([...oldChars, data])
//       } else {
//          alert('algo salio mal');
//       }
//   })
// };

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // const email = 'dasanmartin.g@gmail.com';
  // const password = '1234567';
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { username, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const query = `?email=${username}&password=${password}`;
      const { data } = await axios(URL + query);
      const { access } = data;

      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  // const login = (userData) => {
  //     if ((userData.username === email)&&(userData.password === password)) {
  //       setAccess(true);
  //       navigate('/home');
  //     }
  // }

  const onSearch = async function (id) {
    if (characters.find((char) => char.id === id)) {
      ///se repite igual revisar
      return alert("personaje repetido");
    }

    try {
      const url = `http://localhost:3001/rickandmorty/character/` + id;
      const { data } = await axios(url);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log(error.message);
    }

    // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //     } else {
    //       window.alert("¡No hay personajes con este ID!");
    //     }
    //   });
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== id)
      //filter no modifica el arr original retorna uno nuevo que l0 paso
    );
  };

  return (
    <div className="App">
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <div className={style.nav}>
          <Nav onSearch={onSearch} />
        </div>
      )}
      {/* <div className={style.nav}>
        <Nav onSearch={onSearch} />
      </div> */}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="detail/:detailId" element={<Detail />}></Route>
        {/* <Route path='/' element={<Detail/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
