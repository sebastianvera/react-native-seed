import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedRecipes = createReducer({}, {
  [types.SET_SEARCHED_RECIPES](state, action) {
    let newState = {}
    action.recipes.results.forEach( (recipe) => {
      newState[recipe.trackId] = recipe;
    });
    return newState;
  },

});

export const recipeCount = createReducer(0, {
  [types.ADD_RECIPE](state,action){
    return state + 1;
  }
});
