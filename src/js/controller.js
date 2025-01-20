import * as model from './model.js';
import recipeView from '../views/recipeView.js';
import searchView from '../views/searchView.js';
import searchResults from '../views/searchResultsView';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import paginationView from '../views/paginationView.js';
import bookmarksView from '../views/bookmarksView.js';
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    //0) Update results view to mark selected search results
    // searchResultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmark);

    // 1) Loading recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;
    //2)Rendering Recipe
    recipeView.Render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    //throw new Error(`Something happened! 🔥 ${err.message} ${err.status}!`);
  }
};

///////////////////////////////////////

const controlSearchResults = async function () {
  try {
    //get search query
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);

    //searchResults.renderSpinner();
    const results = model.state.search.results;

    searchResults.Render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.Render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (gotoPage = 1) {
  searchResults.Render(model.getSearchResultsPage(gotoPage));
  // Render initial pagination buttons
  paginationView.Render(model.state.search);
};

////////////////////////////////////////////////////
const controlServings = function (newServings) {
  if (newServings > 0) {
    //update the recipe servings
    model.updateServings(newServings);
    //Update the *recipe* views
    recipeView.Render(model.state.recipe);
  }
};

const controlAddBookmark = function () {
  // Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update recipe view and render updated bookmarks
  recipeView.update(model.state.recipe);
  bookmarksView.Render(model.state.bookmark);
};

//showRecipe
recipeView.addHandlerRender(controlRecipe);
searchView.addHandlerSearch(controlSearchResults);
paginationView.addhandlerClick(controlPagination);
recipeView.addHandlerAddServings(controlServings);
recipeView.addHandlerAddBookmark(controlAddBookmark);
bookmarksView.addHandlerRender(controlBookmarks);
////////////////////////////////////////
