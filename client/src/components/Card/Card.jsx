import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    onClose,
    image,
    addFavorite,
    removeFavorite,
    myFavorites,
  } = props;
  console.log('FAV',props.myFavorites);
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      // addFavorite({
      //   id,
      //   name,
      //   status,
      //   species,
      //   gender,
      //   origin,
      //   onClose,
      //   image,
      //   addFavorite,
      //   removeFavorite,
      // });
      addFavorite(props);
    }
  };

  return (
    <div className={style.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button onClick={() => onClose(id)} className={style.closeButton}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <img src={image} alt={name} />

      {/* <h2>{status}</h2> */}
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      {/* <h2>{origin}</h2> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
