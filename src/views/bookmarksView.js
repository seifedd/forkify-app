import View from './View';
import icons from '../img/icons.svg';
class bookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmark yet. Find a nice recipe and bookmark it!';
  _successMessage = ' ';

  _generateMarkup() {
    return `<li class="preview">
    ${this._data
      .map(searchElmt => {
        return this._generatePreviewResult(searchElmt);
      })
      .join('')}
  </li>`;
  }
  _generatePreviewResult(searchElmt) {
    return ` <a class="preview__link " href="#${searchElmt.id}">
          <figure class="preview__fig">
            <img src="${searchElmt.image}" alt="${searchElmt.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${searchElmt.title}</h4>
            <p class="preview__publisher">${searchElmt.publisher}</p>

          </div>
        </a>`;
  }
}

export default new bookmarksView();
