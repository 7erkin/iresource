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