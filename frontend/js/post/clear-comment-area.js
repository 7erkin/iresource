const commentAreaCssSelector = '.form-control';
const commentArea = document.querySelector(commentAreaCssSelector);

module.exports = () => commentArea.value = '';