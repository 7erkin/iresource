const commentCss = '.media';

module.exports = (quantityAllComments => {
    const quantityRenderedComments = document.querySelectorAll(commentCss).length;
    return quantityRenderedComments < quantityAllComments;
});