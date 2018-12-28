const getComments = require('./get-comments');
const setLikeToComment = require('./set-like-to-comment');
const setLikeToPost = require('./set-like-to-post');
const leaveComment = require('./leave-comment');
const renderComments = require('./render-comments');
const sortCommentsByDate = require('./sort-comments-by-date');
const isAnyCommentsLeft = require('./is-any-comments-left');
const sendComment = require('./send-comment');
const clearCommentArea = require('./clear-comment-area');

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