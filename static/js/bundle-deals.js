/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/js/deals/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/js/deals/app.js":
/*!**********************************!*\
  !*** ./frontend/js/deals/app.js ***!
  \**********************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./frontend/js/deals/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./frontend/js/deals/view.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./frontend/js/deals/controller.js");
/* harmony import */ var _wait_screen_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wait-screen-saver */ "./frontend/js/deals/wait-screen-saver.js");




class Application {
    init() {
        const waitScreenSaver = new _wait_screen_saver__WEBPACK_IMPORTED_MODULE_3__["WaitScreenSaver"]();
        waitScreenSaver.set();
        const model = new _model__WEBPACK_IMPORTED_MODULE_0__["Model"]();
        const controller = new _controller__WEBPACK_IMPORTED_MODULE_2__["Controller"](model);
        waitScreenSaver.remove();
        const view = new _view__WEBPACK_IMPORTED_MODULE_1__["View"](controller, model);
        view.initUpdate();
    }
}


/***/ }),

/***/ "./frontend/js/deals/controller.js":
/*!*****************************************!*\
  !*** ./frontend/js/deals/controller.js ***!
  \*****************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _strategy_filter_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strategy/filter-factory */ "./frontend/js/deals/strategy/filter-factory.js");
/* harmony import */ var _strategy_sort_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strategy/sort-factory */ "./frontend/js/deals/strategy/sort-factory.js");
/* harmony import */ var _strategy_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./strategy/search */ "./frontend/js/deals/strategy/search.js");



class Controller {
    constructor(model) {
        this.model = model;
        this.filterFactory = new _strategy_filter_factory__WEBPACK_IMPORTED_MODULE_0__["FilterStrategyFactory"]();
        this.sortFactory = new _strategy_sort_factory__WEBPACK_IMPORTED_MODULE_1__["SortStrategyFactory"]();
    }
    onFilterButtonClicked(clickedButtonClasses) {
        const strategyInstance = this.filterFactory.createStrategy(clickedButtonClasses);
        this.model.setFilterStrategy(strategyInstance);
        this.model.filter();
    }
    onSortButtonClicked(clickedButtonClasses) {
        const strategyInstance = this.sortFactory.createStrategy(clickedButtonClasses);
        this.model.setSortStrategy(strategyInstance);
        this.model.sort();
    }
    onSearchButtonClicked(clickedButtonClasses, inputValue) {
        if (inputValue === '') {
            return;
        }
        const strategyInstance = new _strategy_search__WEBPACK_IMPORTED_MODULE_2__["SearchByCompanyName"](inputValue);
        this.model.setSearchStrategy(strategyInstance);
        this.model.search();
    }
    onPaginationButtonClicked() { }
}


/***/ }),

/***/ "./frontend/js/deals/index.js":
/*!************************************!*\
  !*** ./frontend/js/deals/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./frontend/js/deals/app.js");

const app = new _app__WEBPACK_IMPORTED_MODULE_0__["Application"]();
app.init();


/***/ }),

/***/ "./frontend/js/deals/model.js":
/*!************************************!*\
  !*** ./frontend/js/deals/model.js ***!
  \************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
class Model {
    constructor() {
        this.originalDeals = this.loadDeals();
        this.subscribers = new Set();
    }
    addSubscriber(subscriber) {
        this.subscribers.add(subscriber);
    }
    removeSubscriber(subscriber) {
        this.subscribers.delete(subscriber);
    }
    notifyAll() {
        for (const subscriber of this.subscribers)
            subscriber.update();
    }
    getData() {
        return this.transformDeals;
    }
    setSortStrategy(sortStrategy) {
        this.sortStrategy = sortStrategy;
    }
    setFilterStrategy(filterStrategy) {
        this.filterStrategy = filterStrategy;
    }
    setSearchStrategy(searchStrategy) {
        this.searchStrategy = searchStrategy;
    }
    sort() {
        this.sortStrategy.sort(this.transformDeals);
        this.notifyAll();
    }
    filter() {
        this.transformDeals = this.filterStrategy.filter(this.originalDeals);
        this.notifyAll();
    }
    search() {
        const deals = this.searchStrategy.search(this.originalDeals);
        this.transformDeals = this.filterStrategy.filter(deals);
        this.sortStrategy.sort(this.transformDeals);
        this.notifyAll();
    }
    loadDeals() {
        return [
            {
                name: "Polys Gold",
                dateOpen: 12345,
                dateClosed: 0,
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                name: "Aeroflot",
                dateOpen: 12345,
                dateClosed: 0,
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                name: "Phosagro",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                name: "Mechel",
                dateOpen: 12345,
                dateClosed: 0,
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                name: "Apple",
                dateOpen: 12345,
                dateClosed: 0,
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            },
            {
                name: "Polys Gold",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                name: "Aeroflot",
                dateOpen: 12345,
                dateClosed: 0,
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                name: "Phosagro",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                name: "Mechel",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                name: "Apple",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            }
        ];
    }
}


/***/ }),

/***/ "./frontend/js/deals/strategy/filter-factory.js":
/*!******************************************************!*\
  !*** ./frontend/js/deals/strategy/filter-factory.js ***!
  \******************************************************/
/*! exports provided: FilterStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStrategyFactory", function() { return FilterStrategyFactory; });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ "./frontend/js/deals/strategy/filter.js");

class FilterStrategyFactory {
    constructor() {
        this.buttonClassToFilterInterface = new Map([
            ['button-active-deals', () => {
                    return new _filter__WEBPACK_IMPORTED_MODULE_0__["FilterByActiveDeals"]();
                }],
            ['button-closed-deals', () => {
                    return new _filter__WEBPACK_IMPORTED_MODULE_0__["FilterByClosedDeals"]();
                }]
        ]);
    }
    createStrategy(buttonClasses) {
        for (let key of this.buttonClassToFilterInterface)
            if (buttonClasses.indexOf(key[0]) !== -1)
                return this.buttonClassToFilterInterface.get(key[0])();
    }
}


/***/ }),

/***/ "./frontend/js/deals/strategy/filter.js":
/*!**********************************************!*\
  !*** ./frontend/js/deals/strategy/filter.js ***!
  \**********************************************/
/*! exports provided: FilterByActiveDeals, FilterByClosedDeals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByActiveDeals", function() { return FilterByActiveDeals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByClosedDeals", function() { return FilterByClosedDeals; });
class FilterByActiveDeals {
    filter(deals) {
        return deals.filter(deal => deal.dateClosed === 0);
    }
}
class FilterByClosedDeals {
    filter(deals) {
        return deals.filter(deal => deal.dateClosed !== 0);
    }
}


/***/ }),

/***/ "./frontend/js/deals/strategy/search.js":
/*!**********************************************!*\
  !*** ./frontend/js/deals/strategy/search.js ***!
  \**********************************************/
/*! exports provided: SearchByCompanyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchByCompanyName", function() { return SearchByCompanyName; });
class SearchByCompanyName {
    constructor(companyName) {
        this.companyName = companyName;
    }
    search(deals) {
        return deals.filter(deal => deal.name.toUpperCase() == this.companyName.toUpperCase());
    }
}


/***/ }),

/***/ "./frontend/js/deals/strategy/sort-factory.js":
/*!****************************************************!*\
  !*** ./frontend/js/deals/strategy/sort-factory.js ***!
  \****************************************************/
/*! exports provided: SortStrategyFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortStrategyFactory", function() { return SortStrategyFactory; });
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sort */ "./frontend/js/deals/strategy/sort.js");



class SortStrategyFactory {
    constructor() {
        this.buttonClassToSortStrategy = new Map([
            ['button-most-popular', () => new _sort__WEBPACK_IMPORTED_MODULE_0__["SortByPopular"]()],
            ['button-most-discussed', () => new _sort__WEBPACK_IMPORTED_MODULE_0__["SortByDiscussed"]()],
            ['button-open-date', () => new _sort__WEBPACK_IMPORTED_MODULE_0__["SortByOpenDate"]()]
        ]);
    }
    createStrategy(buttonClasses) {
        for (let key of this.buttonClassToSortStrategy)
            if (buttonClasses.indexOf(key[0]) !== -1)
                return this.buttonClassToSortStrategy.get(key[0])();
    }
}


/***/ }),

/***/ "./frontend/js/deals/strategy/sort.js":
/*!********************************************!*\
  !*** ./frontend/js/deals/strategy/sort.js ***!
  \********************************************/
/*! exports provided: SortByPopular, SortByDiscussed, SortByOpenDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByPopular", function() { return SortByPopular; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDiscussed", function() { return SortByDiscussed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByOpenDate", function() { return SortByOpenDate; });
class SortByPopular {
    sort(deals) {
        return deals.sort((deal1, deal2) => -deal1.like + deal2.like);
    }
}
class SortByDiscussed {
    sort(deals) {
        return deals.sort((deal1, deal2) => -deal1.comment + deal2.comment);
    }
}
class SortByOpenDate {
    sort(deals) {
        return deals.sort((deal1, deal2) => -deal1.dateOpen + deal2.dateOpen);
    }
}


/***/ }),

/***/ "./frontend/js/deals/view-library.js":
/*!*******************************************!*\
  !*** ./frontend/js/deals/view-library.js ***!
  \*******************************************/
/*! exports provided: removeDeals, renderDeals, getActiveSortButton, getActiveFilterButton, isActiveFilterChoosen, updateActiveButton, clearSearchForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDeals", function() { return removeDeals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderDeals", function() { return renderDeals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveSortButton", function() { return getActiveSortButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveFilterButton", function() { return getActiveFilterButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isActiveFilterChoosen", function() { return isActiveFilterChoosen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateActiveButton", function() { return updateActiveButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearSearchForm", function() { return clearSearchForm; });
const removeDeals = () => document.querySelector('.deal-list').innerHTML = '';

const renderDeals = deals => {
    const templateElement = document.getElementById('template');
    const templateDealNode = templateElement.content.querySelector('.deal-item');
    const fragment = document.createDocumentFragment();
    deals.forEach(deal => {
        let dealNode = templateDealNode.cloneNode(true);
        dealNode.querySelector('.deal-item-name').innerText = deal.name;
        dealNode.querySelector('img').src = deal.image;
        dealNode.querySelector('.likes').innerText = deal.like;
        dealNode.querySelector('.comments').innerText = deal.comment;
        dealNode.querySelector('.date-open').innerText = deal.dateOpen;
        dealNode.querySelector('.watchers').innerText = deal.watcher;
        dealNode.querySelector('.read-deal').href = `/post/${deal.id}`;
        fragment.appendChild(dealNode);
    });
    document.querySelector('.deal-list').appendChild(fragment);
};

const getActiveSortButton = () => document.querySelector('#sort .button-active');

const getActiveFilterButton = () => document.querySelector('#filter .button-active');

const isActiveFilterChoosen = node => Array.from(node.classList).indexOf('button-active') === 0;

const updateActiveButton = (parentCssSelector, node) => {
    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');
    activeButtonNode.classList.remove('button-active');
    node.classList.add('button-active');
};

const clearSearchForm = () => document.querySelector('.form-search input').value = '';

/***/ }),

/***/ "./frontend/js/deals/view.js":
/*!***********************************!*\
  !*** ./frontend/js/deals/view.js ***!
  \***********************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _view_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-library */ "./frontend/js/deals/view-library.js");
/* harmony import */ var _wait_screen_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wait-screen-saver */ "./frontend/js/deals/wait-screen-saver.js");


class View {
    constructor(controller, model) {
        this.controller = controller;
        this.model = model;
        this.waitScreenSaver = new _wait_screen_saver__WEBPACK_IMPORTED_MODULE_1__["WaitScreenSaver"]();
        this.model.addSubscriber(this);
        this.addListenerToFilter();
        this.addListenerToSort();
        this.addListenerToSearch();
    }
    update() {
        Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["removeDeals"])();
        const deals = this.model.getData();
        Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["renderDeals"])(deals);
    }
    initUpdate() {
        const activeSortButton = Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["getActiveSortButton"])();
        const activeFilterButton = Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["getActiveFilterButton"])();
        const sortButtonClasses = Array.from(activeSortButton.classList);
        const filterButtonClasses = Array.from(activeFilterButton.classList);
        this.waitTill([
            {
                activity: this.controller.onFilterButtonClicked.bind(this.controller),
                args: [filterButtonClasses]
            },
            {
                activity: this.controller.onSortButtonClicked.bind(this.controller),
                args: [sortButtonClasses]
            }
        ]);
    }
    addListenerToFilter() {
        document
            .getElementById('filter')
            .addEventListener('click', (evt) => {
            if ((evt.target).tagName.toLowerCase() !== 'button')
                return;
            if (Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["isActiveFilterChoosen"])(evt.target))
                return;
            Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["updateActiveButton"])('#filter', evt.target);
            Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["clearSearchForm"])();
            const buttonClasses = Array.from((evt.target).classList);
            this.waitTill([
                {
                    activity: this.controller.onFilterButtonClicked.bind(this.controller),
                    args: [buttonClasses]
                }
            ]);
        });
    }
    addListenerToSort() {
        document
            .getElementById('sort')
            .addEventListener('click', (evt) => {
            if ((evt.target).tagName.toLowerCase() !== 'button')
                return;
            if (Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["isActiveFilterChoosen"])(evt.target))
                return;
            Object(_view_library__WEBPACK_IMPORTED_MODULE_0__["updateActiveButton"])('#sort', evt.target);
            const buttonClasses = Array.from((evt.target).classList);
            this.waitTill([
                {
                    activity: this.controller.onSortButtonClicked.bind(this.controller),
                    args: [buttonClasses]
                }
            ]);
        });
    }
    addListenerToSearch() {
        document
            .querySelector('.form-search')
            .addEventListener('submit', evt => {
            evt.preventDefault();
            const inputValue = document.querySelector('.form-search input[type="search"]').value;
            this.waitTill([
                {
                    activity: this.controller.onSearchButtonClicked.bind(this.controller),
                    args: [
                        ['button-search'],
                        inputValue
                    ]
                }
            ]);
        });
    }
    waitTill(actions) {
        this.setWaitScreenSaver();
        actions.forEach(action => action.activity(...action.args));
        this.removeWaitScreenSaver();
    }
    setWaitScreenSaver() {
        this.waitScreenSaver.set();
    }
    removeWaitScreenSaver() {
        this.waitScreenSaver.remove();
    }
}


/***/ }),

/***/ "./frontend/js/deals/wait-screen-saver.js":
/*!************************************************!*\
  !*** ./frontend/js/deals/wait-screen-saver.js ***!
  \************************************************/
/*! exports provided: WaitScreenSaver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitScreenSaver", function() { return WaitScreenSaver; });
const template = document.querySelector('#template');
const waitNode = template.content.querySelector('#wait-element');
const dealList = document.querySelector('.deal-list');
class WaitScreenSaver {
    set() {
        const node = waitNode.cloneNode(true);
        dealList.appendChild(node);
    }
    remove() {
        const node = document.querySelector('#wait-element');
        if (node == undefined)
            return;
        node.remove();
    }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle-deals.js.map