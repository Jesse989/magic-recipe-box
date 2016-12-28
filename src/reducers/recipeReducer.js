import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_RECIPE:
      return state;
    case types.SELECT_RECIPE:
      return {
        selectedRecipe: state.recipes[action.index],
        recipes: [
          ...state.recipes.filter( (recipe, index) => index !== action.index),
          state.selectedRecipe
        ]
      };
    case types.ADD_RECIPE:
      if (state.selectedRecipe === undefined) {
        return {
          selectedRecipe: action.recipe,
          recipes: []
        };
      } else {
        return {
          selectedRecipe: action.recipe,
          recipes: [
            ...state.recipes,
            state.selectedRecipe]
        };
      }

    case types.DELETE_SELECTED_RECIPE:
      return {
        selectedRecipe: state.recipes[0],
        recipes: state.recipes.slice(1)
      }
    case types.EDIT_SELECTED_RECIPE:
      return {
        selectedRecipe: action.recipe,
        recipes: state.recipes
      }
    default:
      return state;
  }
}
