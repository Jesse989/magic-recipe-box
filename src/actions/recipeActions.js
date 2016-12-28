import * as types from '../constants/actionTypes';

export const getRecipe = () => ({
  type: types.GET_RECIPE
});

export const addRecipe = (recipe) => ({
  type: types.ADD_RECIPE,
  recipe
});

export const selectRecipe = (index) => ({
  type: types.SELECT_RECIPE,
  index
});

export const deleteRecipe = () => ({
  type: types.DELETE_SELECTED_RECIPE
});

export const editRecipe = (recipe) => ({
  type: types.EDIT_SELECTED_RECIPE,
  recipe
});
