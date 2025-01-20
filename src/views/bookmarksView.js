import View from './View';
import icons from '../img/icons.svg';
class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmark yet. Find a nice recipe and bookmark it!';
  _successMessage = ' ';

  _generateMarkup() {
    return this._data
      .map(searchElmt => this._generatePreviewResult(searchElmt))
      .join('');
  }

  /**
   * Generate the markup for a single bookmark.
   * @param {Object} searchElmt - A single bookmarked recipe object.
   * @returns {string} HTML string for the bookmark.
   */
  _generatePreviewResult(searchElmt) {
    return `
      <li class="preview">
        <a class="preview__link" href="#${searchElmt.id}">
          <figure class="preview__fig">
            <img src="${searchElmt.image}" alt="${searchElmt.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${searchElmt.title}</h4>
            <p class="preview__publisher">${searchElmt.publisher}</p>
          </div>
        </a>
      </li>
    `;
  }

  /**
   * Add a handler for rendering bookmarks on load.
   * @param {Function} handler - The controller function to execute.
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler); // Call handler when the page loads
  }
}

export default new bookmarksView();
