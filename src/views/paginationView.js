import View from './View';
import icons from '../img/icons.svg';
class paginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const currPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );
    //Page 1 and there are other pages

    if (currPage == 1 && numPages > 1) {
      //show the next button and disable previous button
      return ` <button data-goto="${currPage +
        1}" class="btn--inline pagination__btn--next">
      <span>Page  ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //There are on page 1 and there are other pages
    //We are one page >1 and not last page
    if (currPage < numPages && currPage > 1) {
      return `<button data-goto="${currPage -
        1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
    </button>
    <button data-goto="${currPage +
      1}"  class="btn--inline pagination__btn--next">
      <span>Page  ${currPage + 1}</span>
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-right"></use>
      </svg>
    </button>`;
    }
    //we are on the last page
    if (currPage == numPages && numPages > 1) {
      //disable next page and show the previous page
      return `<button data-goto="${currPage -
        1}"  class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="src/img/icons.svg#icon-arrow-left"></use>
      </svg>
      <span>Page ${currPage - 1}</span>
     </button>`;
    }

    return '';
  }
  addhandlerClick(handler) {
    this._parentElement.addEventListener('click', function(e) {
      //Event elegation to figure which button has been clicked
      const btn = e.target.closest('.btn--inline');
      const gotoPage = Number(btn.getAttribute('data-goto'));
      handler(gotoPage);
    });
  }
}

export default new paginationView();
