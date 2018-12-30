import { PostStat, Comment } from "./types";

let quantityRenderedComment = 0;

const templateCss = '#template';
const commentCss = '.media';
const commentListCss = '.media-list';
const commentAreaCssSelector = '.form-control';
const template = document.querySelector(templateCss);
const commentNode = (template as HTMLTemplateElement).content.querySelector(commentCss); 
const commentList = document.querySelector(commentListCss);
const commentArea = document.querySelector(commentAreaCssSelector);

export const renderComments = (comments: ReadonlyArray<Comment>, maxRenderedComment) => {
    const fragment = document.createDocumentFragment();
    for(let i = 0; i < maxRenderedComment && quantityRenderedComment < comments.length; ++i, ++quantityRenderedComment){
        const comment = comments[quantityRenderedComment];
        const node = commentNode.cloneNode(true) as Element;
        (node.querySelector('.pull-left img') as HTMLImageElement).src = comment.userphoto;
        (node.querySelector('.text-success') as HTMLSpanElement).innerText = comment.username;
        (node.querySelector('.text-muted') as HTMLSpanElement).innerText = comment.date.toString();
        (node.querySelector('.comment-body') as HTMLParagraphElement).innerText = comment.text;
        fragment.appendChild(node);
    }
    commentList.appendChild(fragment);
};
export const renderPostStat = (postStat: PostStat) => {};
export const clearCommentArea = () => (commentArea as HTMLTextAreaElement).value = '';

export const isAllCommentsRendered = quantityAllComments => {
    const quantityRenderedComments = document.querySelectorAll(commentCss).length;
    return quantityRenderedComments < quantityAllComments;
};