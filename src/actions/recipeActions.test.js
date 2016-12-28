import * as actions from './recipeActions';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  it('should retrieve initial state', () => {
    const expectedAction = {
      type: types.GET_RECIPE
    };
    expect(actions.getRecipe()).toEqual(expectedAction);
  })

  it('should change the selectedRecipe', () => {
    const index = 0;
    const expectedAction = {
      type: types.SELECT_RECIPE,
      index
    }
    expect(actions.selectRecipe(index)).toEqual(expectedAction);
  })

  it('should add a new recipe', () => {
    const recipe = {
      name: 'pizza',
      ingredients: ['sauce', 'cheese', 'pepperoni']
    };
    const expectedAction = {
      type: types.ADD_RECIPE,
      recipe
    }
    expect(actions.addRecipe(recipe)).toEqual(expectedAction);
  })

  it('should edit the selected recipe', () => {
    const recipe = {
      name: 'bbq pizza',
      ingredients: ['bbq sauce', 'cheese', 'bbq chicken']
    };
    const expectedAction = {
      type: types.EDIT_SELECTED_RECIPE,
      recipe
    }
    expect(actions.editRecipe(recipe)).toEqual(expectedAction);
  })

  it('should delete the selected recipe', () => {
    const expectedAction = {
      type: types.DELETE_SELECTED_RECIPE
    }
    expect(actions.deleteRecipe()).toEqual(expectedAction);
  })
})
