import recipesReducer from './recipes';
import ingredientReducer from './ingredients';

const rootReducer = (state, action) => Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientReducer(state.ingredients, action),
  });

export default rootReducer;
