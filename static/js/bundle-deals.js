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

/***/ "./frontend/js/deals/controller.js":
/*!*****************************************!*\
  !*** ./frontend/js/deals/controller.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Model = __webpack_require__(/*! ./model */ \"./frontend/js/deals/model.js\");\r\nconst View = __webpack_require__(/*! ./view */ \"./frontend/js/deals/view.js\");\r\nconst SortStrategyFactory = __webpack_require__(/*! ./strategy/sort-factory */ \"./frontend/js/deals/strategy/sort-factory.js\");\r\nconst FilterStrategyFactory = __webpack_require__(/*! ./strategy/filter-factory */ \"./frontend/js/deals/strategy/filter-factory.js\");\r\nconst SearchByName = __webpack_require__(/*! ./strategy/search */ \"./frontend/js/deals/strategy/search.js\");\r\n\r\nconst sortStrategyFactory = new SortStrategyFactory();\r\nconst filterStrategyFactory = new FilterStrategyFactory();\r\n\r\nconst HOW_MANY_DEALS_TO_RENDER = 8;\r\n\r\nclass Controller{\r\n    constructor(){\r\n        this._view = new View();\r\n        this._model = new Model();\r\n\r\n        this._model.addSubscriber(this._view);\r\n\r\n        this._view.onFilterButtonClicked = this.onFilterButtonClicked.bind(this);\r\n        this._view.onPaginationButtonClicked = this.onPaginationButtonClicked.bind(this);\r\n        this._view.onSearchButtonClicked = this.onSearchButtonClicked.bind(this);\r\n        this._view.onSortButtonClicked = this.onSortButtonClicked.bind(this);\r\n    }\r\n    init() {\r\n        this._view.initUpdate();\r\n    }\r\n    onSortButtonClicked(buttonClasses){\r\n        const sortStrategyInstance = sortStrategyFactory.createSortStrategy(buttonClasses);\r\n        this._model.setSortStrategy(sortStrategyInstance);\r\n        this._model.sort();\r\n    }\r\n    onFilterButtonClicked(buttonClasses){\r\n        const filterStrategyInstance = filterStrategyFactory.createFilterStrategy(buttonClasses);\r\n        this._model.setFilterStrategy(filterStrategyInstance);\r\n        this._model.filter();\r\n    }\r\n    onSearchButtonClicked(buttonClasses, inputValue){\r\n        if(inputValue === '') {\r\n            this._view.removeViewWait();\r\n            return;\r\n        }\r\n        const searchStrategyInstance = new SearchByName(inputValue);\r\n        this._model.setSearchStrategy(searchStrategyInstance);\r\n        this._model.search();\r\n    }\r\n    onPaginationButtonClicked(paginationValue){}\r\n}\r\n\r\nmodule.exports = Controller;\n\n//# sourceURL=webpack:///./frontend/js/deals/controller.js?");

/***/ }),

/***/ "./frontend/js/deals/index.js":
/*!************************************!*\
  !*** ./frontend/js/deals/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Controller = __webpack_require__(/*! ./controller */ \"./frontend/js/deals/controller.js\");\r\n\r\nconst controller = new Controller();\r\ncontroller.init();\n\n//# sourceURL=webpack:///./frontend/js/deals/index.js?");

/***/ }),

/***/ "./frontend/js/deals/model.js":
/*!************************************!*\
  !*** ./frontend/js/deals/model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Model {\r\n    constructor() {\r\n        this._originalDeals = [\r\n            {\r\n                id: 3,\r\n                name: \"Polys Gold\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 10,\r\n                comment: 10,\r\n                watcher: 10000,\r\n                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'\r\n            },\r\n            {\r\n                id: 4,\r\n                name: \"Aeroflot\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"21.12.2018\",\r\n                like: 100,\r\n                comment: 30,\r\n                watcher: 10000,\r\n                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'\r\n            },\r\n            {\r\n                id: 5,\r\n                name: \"Phosagro\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 260,\r\n                comment: 120,\r\n                watcher: 10000,\r\n                image: 'http://toplogos.ru/images/logo-phosagro.png'\r\n            },\r\n            {\r\n                id: 2,\r\n                name: \"Mechel\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 30,\r\n                comment: 210,\r\n                watcher: 10000,\r\n                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'\r\n            },\r\n            {\r\n                id: 1,\r\n                name: \"Apple\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 20,\r\n                comment: 10,\r\n                watcher: 10000,\r\n                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'\r\n            },\r\n            {\r\n                id: 3,\r\n                name: \"Polys Gold\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 10,\r\n                comment: 10,\r\n                watcher: 10000,\r\n                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'\r\n            },\r\n            {\r\n                id: 4,\r\n                name: \"Aeroflot\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"21.12.2018\",\r\n                like: 100,\r\n                comment: 30,\r\n                watcher: 10000,\r\n                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'\r\n            },\r\n            {\r\n                id: 5,\r\n                name: \"Phosagro\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 260,\r\n                comment: 120,\r\n                watcher: 10000,\r\n                image: 'http://toplogos.ru/images/logo-phosagro.png'\r\n            },\r\n            {\r\n                id: 2,\r\n                name: \"Mechel\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 30,\r\n                comment: 210,\r\n                watcher: 10000,\r\n                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'\r\n            },\r\n            {\r\n                id: 1,\r\n                name: \"Apple\",\r\n                dateOpen: \"20.12.2018\",\r\n                dateClosed: \"\",\r\n                like: 20,\r\n                comment: 10,\r\n                watcher: 10000,\r\n                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'\r\n            }\r\n        ];\r\n        this._transformedDeals = [];\r\n        this._sortStrategy;\r\n        this._filterStrategy;\r\n        this._searchStrategy;\r\n        this._subscribers = new Set();\r\n    }\r\n    addSubscriber(subscriber){\r\n        this._subscribers.add(subscriber);\r\n    }\r\n    removeSubscriber(subscriber){\r\n        this._subscribers.delete(subscriber);\r\n    }\r\n    notify(){\r\n        for(let subscriber of this._subscribers)\r\n            subscriber.update(this._transformedDeals);\r\n    }\r\n    setSortStrategy(sortStrategy) {\r\n        this._sortStrategy = sortStrategy;\r\n    }\r\n    setFilterStrategy(filterStrategy) {\r\n        this._filterStrategy = filterStrategy;\r\n    }\r\n    setSearchStrategy(searchStrategy) {\r\n        this._searchStrategy = searchStrategy;\r\n    }\r\n    sort(){\r\n        this._sortStrategy.sort(this._transformedDeals);\r\n        this.notify(this._transformedDeals);\r\n    }\r\n    filter(){\r\n        this._transformedDeals = this._filterStrategy.filter(this._originalDeals);\r\n        this.notify();\r\n    }\r\n    search(){\r\n        const deals = this._searchStrategy.search(this._originalDeals);\r\n        this._transformedDeals = this._filterStrategy.filter(deals);\r\n        this._sortStrategy.sort(this._transformedDeals);\r\n        this.notify();\r\n    }\r\n}\r\n\r\nmodule.exports = Model;\n\n//# sourceURL=webpack:///./frontend/js/deals/model.js?");

/***/ }),

/***/ "./frontend/js/deals/strategy/filter-factory.js":
/*!******************************************************!*\
  !*** ./frontend/js/deals/strategy/filter-factory.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const FilterByActiveDeals = __webpack_require__(/*! ./filter */ \"./frontend/js/deals/strategy/filter.js\").FilterByActiveDeals;\r\nconst FilterByClosedDeals = __webpack_require__(/*! ./filter */ \"./frontend/js/deals/strategy/filter.js\").FilterByClosedDeals;\r\n\r\nclass FilterFactory{\r\n    constructor(){\r\n        this._buttonClassToFilterStrategy = new Map([\r\n            ['button-active-deals', () => {\r\n                return new FilterByActiveDeals(); \r\n            }],\r\n            ['button-closed-deals',  () => {\r\n                return new FilterByClosedDeals(); \r\n            }]\r\n        ]);\r\n    }\r\n\r\n    createFilterStrategy(buttonClasses, args) {\r\n        for(let key of this._buttonClassToFilterStrategy)\r\n            if(buttonClasses.indexOf(key[0]) !== -1)\r\n                return this._buttonClassToFilterStrategy.get(key[0])(args);\r\n    }\r\n}\r\n\r\nmodule.exports = FilterFactory;\n\n//# sourceURL=webpack:///./frontend/js/deals/strategy/filter-factory.js?");

/***/ }),

/***/ "./frontend/js/deals/strategy/filter.js":
/*!**********************************************!*\
  !*** ./frontend/js/deals/strategy/filter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class FilterStrategy{\r\n    constructor(strategy) {\r\n        this.filter = strategy;\r\n    }\r\n}\r\n\r\nclass FilterByActiveDeals extends FilterStrategy {\r\n    constructor() {\r\n        super(deals => deals.filter(deal => deal.dateClosed === ''));\r\n    }\r\n}\r\n\r\nclass FilterByClosedDeals extends FilterStrategy {\r\n    constructor() {\r\n        super(deals => deals.filter(deal => deal.dateClosed !== ''));\r\n    }\r\n}\r\n        \r\nmodule.exports.FilterByClosedDeals = FilterByClosedDeals;\r\n\r\nmodule.exports.FilterByActiveDeals = FilterByActiveDeals;\r\n\n\n//# sourceURL=webpack:///./frontend/js/deals/strategy/filter.js?");

/***/ }),

/***/ "./frontend/js/deals/strategy/search.js":
/*!**********************************************!*\
  !*** ./frontend/js/deals/strategy/search.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SearchStrategy{\r\n    constructor(strategy){\r\n        this.search = strategy;\r\n    }\r\n}\r\nclass SearchByCompanyName extends SearchStrategy {\r\n    constructor(companyname) {\r\n        super(deals => deals.filter(deal => deal.name.toUpperCase() == companyname.toUpperCase()));\r\n    }\r\n}\r\n\r\nmodule.exports = SearchByCompanyName;\n\n//# sourceURL=webpack:///./frontend/js/deals/strategy/search.js?");

/***/ }),

/***/ "./frontend/js/deals/strategy/sort-factory.js":
/*!****************************************************!*\
  !*** ./frontend/js/deals/strategy/sort-factory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const SortByPopular = __webpack_require__(/*! ./sort */ \"./frontend/js/deals/strategy/sort.js\").SortByPopular;\r\nconst SortByDiscussed = __webpack_require__(/*! ./sort */ \"./frontend/js/deals/strategy/sort.js\").SortByDiscussed;\r\nconst SortByOpenDate = __webpack_require__(/*! ./sort */ \"./frontend/js/deals/strategy/sort.js\").SortByOpenDate;\r\n\r\nclass SortFactory{\r\n    constructor() {\r\n       this._buttonClassToSortStrategy =  new Map([\r\n            ['button-most-popular', () => new SortByPopular()],\r\n            ['button-most-discussed', () => new SortByDiscussed()],\r\n            ['button-open-date', () => new SortByOpenDate()]\r\n        ]);\r\n    }\r\n    createSortStrategy(buttonClasses) {\r\n        for(let key of this._buttonClassToSortStrategy)\r\n            if(buttonClasses.indexOf(key[0]) !== -1)\r\n                return this._buttonClassToSortStrategy.get(key[0])();\r\n    }\r\n}\r\n\r\nmodule.exports = SortFactory;\n\n//# sourceURL=webpack:///./frontend/js/deals/strategy/sort-factory.js?");

/***/ }),

/***/ "./frontend/js/deals/strategy/sort.js":
/*!********************************************!*\
  !*** ./frontend/js/deals/strategy/sort.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class SortStrategy {\r\n    constructor(strategy){\r\n        this.sort = strategy\r\n    }\r\n}\r\n\r\nclass SortByPopular extends SortStrategy {\r\n    constructor() {\r\n        super((deals) => deals.sort((deal1, deal2) => -deal1.like + deal2.like));\r\n    }\r\n}\r\n\r\nclass SortByDiscussed extends SortStrategy {\r\n    constructor() {\r\n        super((deals) => deals.sort((deal1, deal2) => -deal1.comment + deal2.comment));\r\n    }\r\n}\r\n\r\nclass SortByOpenDate extends SortStrategy {\r\n    constructor() {\r\n        super((deals) => deals.sort((deal1, deal2) => -deal1.dateOpen + deal2.dateOpen));\r\n    }\r\n}\r\n\r\nmodule.exports.SortByPopular = SortByPopular;\r\n\r\nmodule.exports.SortByDiscussed = SortByDiscussed;\r\n\r\nmodule.exports.SortByOpenDate = SortByOpenDate;\n\n//# sourceURL=webpack:///./frontend/js/deals/strategy/sort.js?");

/***/ }),

/***/ "./frontend/js/deals/view-library.js":
/*!*******************************************!*\
  !*** ./frontend/js/deals/view-library.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.removeDeals = () => {\r\n    document.\r\n        querySelector('.deal-list').innerHTML = '';\r\n};\r\n\r\nmodule.exports.renderDeals = deals => {\r\n    const templateElement = document.getElementById('template');\r\n    const templateDealNode = templateElement.content.querySelector('.deal-item');\r\n    const fragment = document.createDocumentFragment();\r\n    deals.forEach(deal => {\r\n        let dealNode = templateDealNode.cloneNode(true);\r\n        dealNode.querySelector('.deal-item-name').innerText = deal.name;\r\n        dealNode.querySelector('img').src = deal.image;\r\n        dealNode.querySelector('.likes').innerText = deal.like;\r\n        dealNode.querySelector('.comments').innerText = deal.comment;\r\n        dealNode.querySelector('.date-open').innerText = deal.dateOpen;\r\n        dealNode.querySelector('.watchers').innerText = deal.watcher;\r\n        dealNode.querySelector('.read-deal').href = `/post/${deal.id}`;\r\n        fragment.appendChild(dealNode);\r\n    });\r\n    document.querySelector('.deal-list').appendChild(fragment);\r\n};\r\n\r\nmodule.exports.getActiveSortButton = () => document.querySelector('#sort .button-active');\r\n\r\nmodule.exports.getActiveFilterButton = () => document.querySelector('#filter .button-active');\r\n\r\nmodule.exports.isActiveFilterChoosen = (node) => {\r\n    return Array.prototype.indexOf.call(node.classList, 'button-active') === 0;\r\n};\r\n\r\nmodule.exports.updateActiveButton = (parentCssSelector, node) => {\r\n    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');\r\n    activeButtonNode.classList.remove('button-active');\r\n    node.classList.add('button-active');\r\n};\r\n\r\nmodule.exports.clearSearchForm = () => document.querySelector('.form-search input').value = '';\n\n//# sourceURL=webpack:///./frontend/js/deals/view-library.js?");

/***/ }),

/***/ "./frontend/js/deals/view-wait.js":
/*!****************************************!*\
  !*** ./frontend/js/deals/view-wait.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const template = document.querySelector('#template');\r\nconst waitNode = template.content.querySelector('#wait-element'); \r\n\r\nclass ViewWait{\r\n    constructor() {\r\n\r\n    }\r\n    set(){\r\n        const dealList = document.querySelector('.deal-list');\r\n        const node = waitNode.cloneNode(true);\r\n        dealList.appendChild(node);\r\n    }\r\n    remove(){\r\n        const node = document.querySelector('#wait-element');\r\n        if(node == undefined) return;\r\n        node.remove();\r\n    }\r\n}\r\n\r\nmodule.exports = ViewWait;\n\n//# sourceURL=webpack:///./frontend/js/deals/view-wait.js?");

/***/ }),

/***/ "./frontend/js/deals/view.js":
/*!***********************************!*\
  !*** ./frontend/js/deals/view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const removeDeals = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").removeDeals;\r\nconst renderDeals = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").renderDeals;\r\nconst getActiveFilterButton = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").getActiveFilterButton;\r\nconst getActiveSortButton = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").getActiveSortButton;\r\nconst isActiveFilterChoosen = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").isActiveFilterChoosen;\r\nconst updateActiveButton = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").updateActiveButton;\r\nconst clearSearchForm = __webpack_require__(/*! ./view-library */ \"./frontend/js/deals/view-library.js\").clearSearchForm;\r\nconst ViewWait = __webpack_require__(/*! ./view-wait */ \"./frontend/js/deals/view-wait.js\");\r\n\r\nclass View {\r\n    constructor() {\r\n        document\r\n            .getElementById('filter')\r\n            .addEventListener('click', (evt) => {\r\n                if(evt.target.tagName.toLowerCase() !== 'button')\r\n                    return;\r\n                if(isActiveFilterChoosen(evt.target))\r\n                    return;\r\n\r\n                updateActiveButton('#filter', evt.target);\r\n                clearSearchForm();\r\n                this.setViewWait();\r\n                const buttonClasses = Array.from(evt.target.classList);\r\n                this.onFilterButtonClicked(buttonClasses);\r\n            });\r\n        \r\n        document\r\n            .getElementById('sort')\r\n            .addEventListener('click', (evt) => {\r\n                if(evt.target.tagName.toLowerCase() !== 'button')\r\n                    return;\r\n                if(isActiveFilterChoosen(evt.target))\r\n                    return;\r\n\r\n                updateActiveButton('#sort', evt.target);\r\n                this.setViewWait();\r\n                const buttonClasses = Array.from(evt.target.classList);\r\n                this.onSortButtonClicked(buttonClasses);\r\n            });\r\n\r\n        document\r\n            .querySelector('.form-search')\r\n            .addEventListener('submit', evt => {\r\n                evt.preventDefault();\r\n                this.setViewWait();\r\n                const inputValue = document.querySelector('.form-search input[type=\"search\"]').value;\r\n                this.onSearchButtonClicked(['button-search'], inputValue);\r\n        });\r\n        document\r\n            .querySelector('.pagination')\r\n            .addEventListener('click', evt => {\r\n                this.setViewWait();\r\n                this.onPaginationButtonClicked();\r\n            });\r\n\r\n        this._viewWait = new ViewWait();\r\n    }\r\n    update(deals){\r\n        removeDeals();\r\n        renderDeals(deals);\r\n        this.removeViewWait();\r\n    }\r\n    initUpdate(){\r\n        const activeSortButton = getActiveSortButton();\r\n        const activeFilterButton = getActiveFilterButton();\r\n\r\n        this.onFilterButtonClicked(Array.from(activeFilterButton.classList));\r\n        this.onSortButtonClicked(Array.from(activeSortButton.classList));\r\n    }\r\n    setViewWait() {\r\n        this._viewWait.set();\r\n    }\r\n    removeViewWait(){\r\n        this._viewWait.remove();\r\n    }\r\n    onSearchButtonClicked() {}\r\n    onSortButtonClicked() {}\r\n    onFilterButtonClicked() {}\r\n    onPaginationButtonClicked() {}\r\n}\r\n\r\nmodule.exports = View;\n\n//# sourceURL=webpack:///./frontend/js/deals/view.js?");

/***/ })

/******/ });