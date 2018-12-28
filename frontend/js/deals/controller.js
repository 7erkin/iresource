const Model = require('./model');
const View = require('./view');
const SortStrategyFactory = require('./strategy/sort-factory');
const FilterStrategyFactory = require('./strategy/filter-factory');
const SearchByName = require('./strategy/search');

const sortStrategyFactory = new SortStrategyFactory();
const filterStrategyFactory = new FilterStrategyFactory();

const HOW_MANY_DEALS_TO_RENDER = 8;

class Controller{
    constructor(){
        this._view = new View();
        this._model = new Model();

        this._model.addSubscriber(this._view);

        this._view.onFilterButtonClicked = this.onFilterButtonClicked.bind(this);
        this._view.onPaginationButtonClicked = this.onPaginationButtonClicked.bind(this);
        this._view.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);
        this._view.onSortButtonClicked = this.onSortButtonClicked.bind(this);
    }
    init() {
        this._view.initUpdate();
    }
    onSortButtonClicked(buttonClasses){
        const sortStrategyInstance = sortStrategyFactory.createSortStrategy(buttonClasses);
        this._model.setSortStrategy(sortStrategyInstance);
        this._model.sort();
    }
    onFilterButtonClicked(buttonClasses){
        const filterStrategyInstance = filterStrategyFactory.createFilterStrategy(buttonClasses);
        this._model.setFilterStrategy(filterStrategyInstance);
        this._model.filter();
    }
    onSearchButtonClicked(buttonClasses, inputValue){
        if(inputValue === '') {
            this._view.removeViewWait();
            return;
        }
        const searchStrategyInstance = new SearchByName(inputValue);
        this._model.setSearchStrategy(searchStrategyInstance);
        this._model.search();
    }
    onPaginationButtonClicked(paginationValue){}
}

module.exports = Controller;