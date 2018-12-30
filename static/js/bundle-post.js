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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/js/post/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/js/post/clear-comment-area.js":
/*!************************************************!*\
  !*** ./frontend/js/post/clear-comment-area.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const commentAreaCssSelector = '.form-control';
const commentArea = document.querySelector(commentAreaCssSelector);

module.exports = () => commentArea.value = '';

/***/ }),

/***/ "./frontend/js/post/get-comments.js":
/*!******************************************!*\
  !*** ./frontend/js/post/get-comments.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = () => {
    return [
        {
            id: '2',
            username: 'Sara',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-20-10',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: '3',
            username: 'Jessica',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2017-10-10',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
        },
        {
            id: '5',
            username: 'Jane',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-12-13',
            text: 'Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            id: '1',
            username: 'Tom',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-28-12',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
        },
        {
            id: '4',
            username: 'Liza',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2018-21-12',
            text: 'lpa qui officia deserunt mollit ani'
        },
        {
            id: '2',
            username: 'Sara',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-20-10',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: '3',
            username: 'Jessica',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2017-10-10',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
        },
        {
            id: '5',
            username: 'Jane',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-12-13',
            text: 'Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            id: '1',
            username: 'Tom',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-28-12',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
        },
        {
            id: '4',
            username: 'Liza',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2018-21-12',
            text: 'lpa qui officia deserunt mollit ani'
        },
        {
            id: '2',
            username: 'Sara',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-20-10',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
        },
        {
            id: '3',
            username: 'Jessica',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2017-10-10',
            text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
        },
        {
            id: '5',
            username: 'Jane',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-12-13',
            text: 'Duis aute irure dolor in reprehenderit in voluptate'
        },
        {
            id: '1',
            username: 'Tom',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2016-28-12',
            text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui'
        },
        {
            id: '4',
            username: 'Liza',
            userphoto: 'http://bootstraptema.ru/snippets/element/2016/comments/com-4.jpg',
            date: '2018-21-12',
            text: 'lpa qui officia deserunt mollit ani'
        }
    ];
};

/***/ }),

/***/ "./frontend/js/post/index.js":
/*!***********************************!*\
  !*** ./frontend/js/post/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const getComments = __webpack_require__(/*! ./get-comments */ "./frontend/js/post/get-comments.js");
const setLikeToComment = __webpack_require__(/*! ./set-like-to-comment */ "./frontend/js/post/set-like-to-comment.js");
const setLikeToPost = __webpack_require__(/*! ./set-like-to-post */ "./frontend/js/post/set-like-to-post.js");
const leaveComment = __webpack_require__(/*! ./leave-comment */ "./frontend/js/post/leave-comment.js");
const renderComments = __webpack_require__(/*! ./render-comments */ "./frontend/js/post/render-comments.js");
const sortCommentsByDate = __webpack_require__(/*! ./sort-comments-by-date */ "./frontend/js/post/sort-comments-by-date.js");
const isAnyCommentsLeft = __webpack_require__(/*! ./is-any-comments-left */ "./frontend/js/post/is-any-comments-left.js");
const sendComment = __webpack_require__(/*! ./send-comment */ "./frontend/js/post/send-comment.js");
const clearCommentArea = __webpack_require__(/*! ./clear-comment-area */ "./frontend/js/post/clear-comment-area.js");

const hideElement = cssSelector => document.querySelector(cssSelector).hidden = true;

const COMMENTS_FOR_ONCE_RENDER = 10;
const showMoreButtonCssSelector = '.button-show-more-comments';
const sendCommentButtonCssSelector = '.pull-right';

const comments = getComments();
sortCommentsByDate(comments);
renderComments(comments, COMMENTS_FOR_ONCE_RENDER);
if(!isAnyCommentsLeft(comments.length))
            hideElement(showMoreButtonCssSelector);

document.
    querySelector(showMoreButtonCssSelector).
    addEventListener('click', () => {
        renderComments(comments, COMMENTS_FOR_ONCE_RENDER);
        if(!isAnyCommentsLeft(comments.length))
            hideElement(showMoreButtonCssSelector);
    });

document.
    querySelector(sendCommentButtonCssSelector). 
    addEventListener('click', () => {
        sendComment();
        clearCommentArea();
    });

document
    .querySelector('.like-call a')
    .addEventListener('click', () => {
        document.querySelector('.like-call img').src = '../img/set-like.png';
    });

/***/ }),

/***/ "./frontend/js/post/is-any-comments-left.js":
/*!**************************************************!*\
  !*** ./frontend/js/post/is-any-comments-left.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const commentCss = '.media';

module.exports = (quantityAllComments => {
    const quantityRenderedComments = document.querySelectorAll(commentCss).length;
    return quantityRenderedComments < quantityAllComments;
});

/***/ }),

/***/ "./frontend/js/post/leave-comment.js":
/*!*******************************************!*\
  !*** ./frontend/js/post/leave-comment.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/js/post/render-comments.js":
/*!*********************************************!*\
  !*** ./frontend/js/post/render-comments.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

let quantityRenderedComment = 0;

const templateCss = '#template';
const commentCss = '.media';
const commentListCss = '.media-list';
const template = document.querySelector(templateCss);
const commentNode = template.content.querySelector(commentCss); 
const commentList = document.querySelector(commentListCss);

module.exports = (comments, maxRenderedComment) => {
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < maxRenderedComment && quantityRenderedComment < comments.length; ++i, ++quantityRenderedComment){
        const comment = comments[quantityRenderedComment];
        const node = commentNode.cloneNode(true);
        node.querySelector('.pull-left img').src = comment.userphoto;
        node.querySelector('.text-success').innerText = comment.username;
        node.querySelector('.text-muted').innerText = comment.date;
        node.querySelector('.comment-body').innerText = comment.text;
        fragment.appendChild(node);
    }
    commentList.appendChild(fragment);
};

/***/ }),

/***/ "./frontend/js/post/send-comment.js":
/*!******************************************!*\
  !*** ./frontend/js/post/send-comment.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const commentAreaCssSelector = '.form-control';
const URL_POST_COMMENT = '#';

module.exports = () => {
    
};

/***/ }),

/***/ "./frontend/js/post/set-like-to-comment.js":
/*!*************************************************!*\
  !*** ./frontend/js/post/set-like-to-comment.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/js/post/set-like-to-post.js":
/*!**********************************************!*\
  !*** ./frontend/js/post/set-like-to-post.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./frontend/js/post/sort-comments-by-date.js":
/*!***************************************************!*\
  !*** ./frontend/js/post/sort-comments-by-date.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = (comments) => {};

/***/ })

/******/ });
//# sourceMappingURL=bundle-post.js.map