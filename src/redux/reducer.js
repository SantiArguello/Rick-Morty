import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES:
      let favs = [...state.allCharacters];
      favs.push(action.payload);
      return {
        ...state,
        myFavorites: favs,
        allCharacters: [...favs],
      };
    // return {
    //     ...state,
    //     myFavorites:[...state.myFavorites, action.payload]
    // }
    case DELETE_FAVORITES:
      const filterFavorite = state.myFavorites.filter(
        (e) => e.id !== action.payload
      );
      return {
        allCharacters:filterFavorite,
        myFavorites: filterFavorite,
          };
      
    case FILTER:
      const characters = [...state.allCharacters];
      const filterCharacter = action.payload === "ALL" ? state.allCharacters : characters.filter(
        (e) => e.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterCharacter,
      };

    case ORDER:
      const copyCharacter = [...state.myFavorites];
     
        if (action.payload === "Ascendente") {
          copyCharacter.sort((a, b) => a.id - b.id);
        } else {
          copyCharacter.sort((a, b) => b.id - a.id);
        }
      


      console.log(copyCharacter)
      return {
        ...state,
        myFavorites: copyCharacter,
      };

    default:
      return state;
  }
}
