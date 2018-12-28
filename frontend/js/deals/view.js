const removeDeals = require('./view-library').removeDeals;
const renderDeals = require('./view-library').renderDeals;
const getActiveFilterButton = require('./view-library').getActiveFilterButton;
const getActiveSortButton = require('./view-library').getActiveSortButton;
const isActiveFilterChoosen = require('./view-library').isActiveFilterChoosen;
const updateActiveButton = require('./view-library').updateActiveButton;
const clearSearchForm = require('./view-library').clearSearchForm;
const ViewWait = require('./view-wait');

class View {
    constructor() {
        document
            .getElementById('filter')
            .addEventListener('click', (evt) => {
                if(evt.target.tagName.toLowerCase() !== 'button')
                    return;
                if(isActiveFilterChoosen(evt.target))
                    return;

                updateActiveButton('#filter', evt.target);
                clearSearchForm();
                this.setViewWait();
                const buttonClasses = Array.from(evt.target.classList);
                this.onFilterButtonClicked(buttonClasses);
            });
        
        document
            .getElementById('sort')
            .addEventListener('click', (evt) => {
                if(evt.target.tagName.toLowerCase() !== 'button')
                    return;
                if(isActiveFilterChoosen(evt.target))
                    return;

                updateActiveButton('#sort', evt.target);
                this.setViewWait();
                const buttonClasses = Array.from(evt.target.classList);
                this.onSortButtonClicked(buttonClasses);
            });

        document
            .querySelector('.form-search')
            .addEventListener('submit', evt => {
                evt.preventDefault();
                this.setViewWait();
                const inputValue = document.querySelector('.form-search input[type="search"]').value;
                this.onSearchButtonClicked(['button-search'], inputValue);
        });
        document
            .querySelector('.pagination')
            .addEventListener('click', evt => {
                this.setViewWait();
                this.onPaginationButtonClicked();
            });

        this._viewWait = new ViewWait();
    }
    update(deals){
        removeDeals();
        renderDeals(deals);
        this.removeViewWait();
    }
    initUpdate(){
        const activeSortButton = getActiveSortButton();
        const activeFilterButton = getActiveFilterButton();

        this.onFilterButtonClicked(Array.from(activeFilterButton.classList));
        this.onSortButtonClicked(Array.from(activeSortButton.classList));
    }
    setViewWait() {
        this._viewWait.set();
    }
    removeViewWait(){
        this._viewWait.remove();
    }
    onSearchButtonClicked() {}
    onSortButtonClicked() {}
    onFilterButtonClicked() {}
    onPaginationButtonClicked() {}
}

module.exports = View;