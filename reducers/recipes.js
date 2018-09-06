const initialState = [];

const recipesReducer = (recipes = initialState, action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return recipes.concat({ name: action.name });
  }

  return recipes;
};

export default recipesReducer;
