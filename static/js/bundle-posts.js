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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/js/posts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/js/posts/controller.js":
/*!*****************************************!*\
  !*** ./frontend/js/posts/controller.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Model = __webpack_require__(/*! ./model */ "./frontend/js/posts/model.js");
const View = __webpack_require__(/*! ./view */ "./frontend/js/posts/view.js");
const SortStrategyFactory = __webpack_require__(/*! ./strategy/sort-factory */ "./frontend/js/posts/strategy/sort-factory.js");
const SearchByName = __webpack_require__(/*! ./strategy/search */ "./frontend/js/posts/strategy/search.js");

const sortStrategyFactory = new SortStrategyFactory();

const HOW_MANY_DEALS_TO_RENDER = 8;

class Controller{
    constructor(){
        this._view = new View();
        this._model = new Model();

        this._model.addSubscriber(this._view);

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

/***/ }),

/***/ "./frontend/js/posts/index.js":
/*!************************************!*\
  !*** ./frontend/js/posts/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Controller = __webpack_require__(/*! ./controller */ "./frontend/js/posts/controller.js");

const controller = new Controller();
controller.init();

/***/ }),

/***/ "./frontend/js/posts/model.js":
/*!************************************!*\
  !*** ./frontend/js/posts/model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Model {
    constructor() {
        this._originalDeals = [
            {
                id: 3,
                name: "Polys Gold",
                datePublish: "20.12.2018",
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                id: 4,
                name: "Aeroflot",
                datePublish: "20.12.2018",
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                id: 5,
                name: "Phosagro",
                datePublish: "20.12.2018",
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                id: 2,
                name: "Mechel",
                datePublish: "20.12.2018",
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                id: 1,
                name: "Apple",
                datePublish: "20.12.2018",
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            },
            {
                id: 3,
                name: "Polys Gold",
                datePublish: "20.12.2018",
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                id: 4,
                name: "Aeroflot",
                datePublish: "20.12.2018",
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                id: 5,
                name: "Phosagro",
                datePublish: "20.12.2018",
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                id: 2,
                name: "Mechel",
                datePublish: "20.12.2018",
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                id: 1,
                name: "Apple",
                datePublish: "20.12.2018",
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            }
        ];
        this._transformedDeals = this._originalDeals.slice();
        this._sortStrategy;
        this._searchStrategy;
        this._subscribers = new Set();
    }
    addSubscriber(subscriber){
        this._subscribers.add(subscriber);
    }
    removeSubscriber(subscriber){
        this._subscribers.delete(subscriber);
    }
    notify(){
        for(let subscriber of this._subscribers)
            subscriber.update(this._transformedDeals);
    }
    setSortStrategy(sortStrategy) {
        this._sortStrategy = sortStrategy;
    }
    setSearchStrategy(searchStrategy) {
        this._searchStrategy = searchStrategy;
    }
    sort(){
        this._sortStrategy.sort(this._transformedDeals);
        this.notify(this._transformedDeals);
    }
    search(){
        this._transformedDeals = this._searchStrategy.search(this._originalDeals);
        this._sortStrategy.sort(this._transformedDeals);
        this.notify();
    }
}

module.exports = Model;

/***/ }),

/***/ "./frontend/js/posts/strategy/search.js":
/*!**********************************************!*\
  !*** ./frontend/js/posts/strategy/search.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SearchStrategy{
    constructor(strategy){
        this.search = strategy;
    }
}
class SearchByCompanyName extends SearchStrategy {
    constructor(companyname) {
        super(deals => deals.filter(deal => deal.name.toUpperCase() == companyname.toUpperCase()));
    }
}

module.exports = SearchByCompanyName;

/***/ }),

/***/ "./frontend/js/posts/strategy/sort-factory.js":
/*!****************************************************!*\
  !*** ./frontend/js/posts/strategy/sort-factory.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SortByPopular = __webpack_require__(/*! ./sort */ "./frontend/js/posts/strategy/sort.js").SortByPopular;
const SortByDiscussed = __webpack_require__(/*! ./sort */ "./frontend/js/posts/strategy/sort.js").SortByDiscussed;
const SortByPublishDate = __webpack_require__(/*! ./sort */ "./frontend/js/posts/strategy/sort.js").SortByPublishDate;

class SortFactory{
    constructor() {
       this._buttonClassToSortStrategy =  new Map([
            ['button-most-popular', () => new SortByPopular()],
            ['button-most-discussed', () => new SortByDiscussed()],
            ['button-publish-date', () => new SortByPublishDate()]
        ]);
    }
    createSortStrategy(buttonClasses) {
        for(let key of this._buttonClassToSortStrategy)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this._buttonClassToSortStrategy.get(key[0])();
    }
}

module.exports = SortFactory;

/***/ }),

/***/ "./frontend/js/posts/strategy/sort.js":
/*!********************************************!*\
  !*** ./frontend/js/posts/strategy/sort.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class SortStrategy {
    constructor(strategy){
        this.sort = strategy
    }
}

class SortByPopular extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.like + deal2.like));
    }
}

class SortByDiscussed extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.comment + deal2.comment));
    }
}

class SortByPublishDate extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.datePublish + deal2.datePublish));
    }
}

module.exports.SortByPopular = SortByPopular;

module.exports.SortByDiscussed = SortByDiscussed;

module.exports.SortByPublishDate = SortByPublishDate;

/***/ }),

/***/ "./frontend/js/posts/view-library.js":
/*!*******************************************!*\
  !*** ./frontend/js/posts/view-library.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.removePosts = () => {
    document.
        querySelector('.post-list').innerHTML = '';
};

module.exports.renderPosts = posts => {
    const templateElement = document.getElementById('template');
    const templatepostNode = templateElement.content.querySelector('.post-item');
    const fragment = document.createDocumentFragment();
    posts.forEach(post => {
        let postNode = templatepostNode.cloneNode(true);
        postNode.querySelector('.post-item-name').innerText = post.name;
        postNode.querySelector('img').src = post.image;
        postNode.querySelector('.likes').innerText = post.like;
        postNode.querySelector('.comments').innerText = post.comment;
        postNode.querySelector('.publish-date').innerText = post.datePublish;
        postNode.querySelector('.watchers').innerText = post.watcher;
        postNode.querySelector('.read-post').href = `/post/${post.id}`;
        fragment.appendChild(postNode);
    });
    document.querySelector('.post-list').appendChild(fragment);
};

module.exports.getActiveSortButton = () => document.querySelector('#sort .button-active');

module.exports.isActiveFilterChoosen = (node) => {
    return Array.prototype.indexOf.call(node.classList, 'button-active') === 0;
};

module.exports.updateActiveButton = (parentCssSelector, node) => {
    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');
    activeButtonNode.classList.remove('button-active');
    node.classList.add('button-active');
};

module.exports.clearSearchForm = () => document.querySelector('.form-search input').value = '';

/***/ }),

/***/ "./frontend/js/posts/view-wait.js":
/*!****************************************!*\
  !*** ./frontend/js/posts/view-wait.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const template = document.querySelector('#template');
const waitNode = template.content.querySelector('#wait-element'); 

class ViewWait{
    constructor() {

    }
    set(){
        const postList = document.querySelector('.post-list');
        const node = waitNode.cloneNode(true);
        postList.appendChild(node);
    }
    remove(){
        const node = document.querySelector('#wait-element');
        if(node == undefined) return;
        node.remove();
    }
}

module.exports = ViewWait;

/***/ }),

/***/ "./frontend/js/posts/view.js":
/*!***********************************!*\
  !*** ./frontend/js/posts/view.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const removePosts = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").removePosts;
const renderPosts = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").renderPosts;
const getActiveFilterButton = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").getActiveFilterButton;
const getActiveSortButton = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").getActiveSortButton;
const isActiveFilterChoosen = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").isActiveFilterChoosen;
const updateActiveButton = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").updateActiveButton;
const clearSearchForm = __webpack_require__(/*! ./view-library */ "./frontend/js/posts/view-library.js").clearSearchForm;
const ViewWait = __webpack_require__(/*! ./view-wait */ "./frontend/js/posts/view-wait.js");

class View {
    constructor() {        
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
    update(posts){
        removePosts();
        renderPosts(posts);
        this.removeViewWait();
    }
    initUpdate(){
        const activeSortButton = getActiveSortButton();

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
    onPaginationButtonClicked() {}
}

module.exports = View;

/***/ })

/******/ });
//# sourceMappingURL=bundle-posts.js.map