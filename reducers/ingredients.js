const initialState = [];

const ingredientsReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity,
      };

      return ingredients.concat(newIngredient);
  }

  return ingredients;
};

export default ingredientReducer;