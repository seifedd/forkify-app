import { API_URL, RESULT_PER_PAGE } from './config.js';
import { getJSON } from './helper.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: '',
    resultPerPage: RESULT_PER_PAGE,
    page: 1
  },
  bookmark: []
};

export const loadRecipe = async function(id) {
  try {
    //2) Load recipe
    const response = await getJSON(`${API_URL}/${id}`);

    const { recipe } = response.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      cookingTime: recipe.cooking_time,
      publisher: recipe.publisher,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      ingredients: recipe.ingredients
    };
    if (state.bookmark.some(b => b.id === id)) state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
    //console.log(recipe);
  } catch (Err) {
    throw error(`${Err} ☔☔☔ `);
    console.error(`${Err} ☔☔☔ `);
  }
};

//////////////////////////////////////////////

export const loadSearchResults = async function(query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        image: rec.image_url,
        publisher: rec.publisher,
        title: rec.title
      };
    });
    state.search.page = 1;
  } catch (Err) {
    console.error(`${Err} ☔☔☔ `);
    throw error(`${Err} ☔☔☔ `);
  }
};

/////////////////////////////////////////////////////////
export const getSearchResultsPage = function(page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultPerPage,
    end = page * state.search.resultPerPage;

  return state.search.results.slice(start, end);
};

/////////////////////////////////////////////////////////

export const updateServings = function(newServings) {
  //newQty=OldQty*(NewServings/OldServings)

  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * (newServings / state.recipe.servings);
  });
  state.recipe.servings = newServings;
};

///////////////////////////////////////////////////////

export const addBookmark = function(recipe) {
  //Add bookmark to state
  state.bookmark.push(recipe);

  //Mark current recipe as bookmark
  if (recipe.id == state.recipe.id) state.recipe.bookmarked = true;
};

export const deleteBookmark = function(id) {
  const index = state.bookmark.findIndex(el => el.id == id);
  state.bookmark.splice(index, 1);

  //
  if (id == state.recipe.id) {
    state.recipe.bookmarked = false;
  }
};
