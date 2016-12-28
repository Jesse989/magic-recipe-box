import recipeReducer from './recipeReducer';
import * as types from '../constants/ActionTypes';
import initialState from './initialState';

describe('recipe reducer', () => {
  it('should return the initial state', () => {
    expect(
      recipeReducer(undefined, {
        type: types.GET_RECIPE
      })
    ).toEqual(initialState)
  })

  it('should return new state with new selectedRecipe', () => {
    expect(
      recipeReducer(initialState, {
        type: types.SELECT_RECIPE,
        index: 0
      })
    ).toEqual({
      selectedRecipe: {
        name: 'spaghetti',
        ingredients: ['sauce', 'noodles', 'love']
      },
      recipes: [
        {
          name: 'tacos',
          ingredients: ['meat', 'cheese', 'lettuce']
        },
        {
          name: 'tuna sandwich',
          ingredients: ['tuna', 'bread', 'mayo']
        }
      ]
    })
  })

  it('should add a new recipe', () => {
    expect(
      recipeReducer(initialState, {
        type: types.ADD_RECIPE,
        recipe: {
          name: 'pizza',
          ingredients: ['sauce', 'cheese', 'pepperoni']
        }
      })
    ).toEqual({
      selectedRecipe: {
        name: 'pizza',
        ingredients: ['sauce', 'cheese', 'pepperoni']
      },
      recipes: [
        {
          name: 'spaghetti',
          ingredients: ['sauce', 'noodles', 'love']
        },
        {
          name: 'tacos',
          ingredients: ['meat', 'cheese', 'lettuce']
        },
        {
          name: 'tuna sandwich',
          ingredients: ['tuna', 'bread', 'mayo']
        }
      ]
    })
  })

  it('should add a first recipe', () => {
    expect(
      recipeReducer({
        selectedRecipe: undefined,
        recipes: []
      }, {
        type: types.ADD_RECIPE,
        recipe: {
          name: 'pizza',
          ingredients: ['sauce', 'cheese', 'pepperoni']
        }
      })
    ).toEqual({
      selectedRecipe: {
        name: 'pizza',
        ingredients: ['sauce', 'cheese', 'pepperoni']
      },
      recipes: []
    })
  })

  it('should edit a recipe', () => {
    expect(
      recipeReducer(initialState, {
        type: types.EDIT_SELECTED_RECIPE,
        recipe: {
          name: 'awesome tuna sandwich',
          ingredients: ['tuna', 'bread', 'mayo', 'mustard']
        }
      })
    ).toEqual({
      selectedRecipe: {
        name: 'awesome tuna sandwich',
        ingredients: ['tuna', 'bread', 'mayo', 'mustard']
      },
      recipes: [
        {
          name: 'spaghetti',
          ingredients: ['sauce', 'noodles', 'love']
        },
        {
          name: 'tacos',
          ingredients: ['meat', 'cheese', 'lettuce']
        }
      ]
    })
  })

  it('should delete selected recipe', () => {
    expect(
      recipeReducer(initialState, {
        type: types.DELETE_SELECTED_RECIPE
      })
    ).toEqual({
      selectedRecipe: {
        name: 'spaghetti',
        ingredients: ['sauce', 'noodles', 'love']
      },
      recipes: [
        {
          name: 'tacos',
          ingredients: ['meat', 'cheese', 'lettuce']
        }
      ]
    })
  })
})
