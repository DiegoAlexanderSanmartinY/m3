import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


export const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  const [aux, Setaux] = useState(false);

  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    Setaux(true);
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))

  }


  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
        <option value="allcharacters">allcharacters</option>
      </select>
      {favorites.map(
        ({ id, name, status, species, gender, image, origin, onClose }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </>
  );
};
