import { FILTER, ORDER } from "./actions-types";
import axios from "axios";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);

      return dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    };
  } catch (error) {
    return { error: error.message };
  }
};
// export const addFavorite = (character) => {
//     return {type: ADD_FAVORITE, payload: character }
// };

export const removeFavorite = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    };
  } catch (error) {}
};

// export const removeFavorite = (id) => {
//     return {type: REMOVE_FAVORITE, payload: id}
// };

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
