import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Detail = () => {
  const { id } = useParams();
  const [character,setCharacter] = useState({});
  console.log(id);
  //console.log(character);
  useEffect(() => {
    // axios(`https://rickandmortyapi.com/api/character/${detailId}?key${KEY}`).
    axios(`http://localhost:3001/rickandmorty/detail/${id}`).then(
      ({ data }) => {
        console.log('---->', data)
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, []);//le puse id 06152023
  return (
    <div>
        {
            character.name ?
            (<>
                <h2>{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin?.name}</p>
                <img src={character.image}/>
            </>)
            : (<h3>LOADING....</h3>)
        }
      
    </div>
  );
};

export default Detail;
