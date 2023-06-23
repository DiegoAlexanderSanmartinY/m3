import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";
import { FILTER, ORDER } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, 
        myFavorites: action.payload, 
        allCharacters: action.payload };
      // return {
      //   ...state,
      //   myFavorites: [...state.allCharacters, action.payload],
      //   allCharacters: [...state.allCharacters, action.payload],
      // };



    // case REMOVE_FAVORITE:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (char) => char.id !== action.payload
    //     ),
    //   };
    case REMOVE_FAVORITE:
      return { 
        ...state, 
        myFavorites: action.payload };

    case FILTER:
      const allCharactersFilter = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allcharacters"
            ? [...state.allCharacters]
            : allCharactersFilter,
      };

    case ORDER:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites: (action.payload = "A")
          ? allCharactersCopy.sort((a, b) => a.id - b.id)
          : allCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
