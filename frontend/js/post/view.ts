import { ViewInterface, ModelInterface } from "./interfaces";
import { ControllerInterface } from "./interfaces";
import { Comment } from "./types";
import { renderComments, renderPostStat } from "./view-library";

const HOW_MANY_COMMENTS_ONCE_RENDER = 10;

export class View implements ViewInterface {
    private controller: ControllerInterface;
    private model: ModelInterface;
    private comments: ReadonlyArray<Comment>;

    constructor(controller: ControllerInterface, model: ModelInterface) {
        this.controller = controller;
        this.model = model;

        this.model.addSubscriber(this);

        this.addListenerToSendCommentButton();
        this.addListenerToSetLikeToPostButton();
        this.addListenerToSetLikeToCommentButton();
        this.addListenerToShowMoreCommentButton();
        this.addListenerToSendAnswerToCommentButton();
    }

    update(): void {}
    initUpdate(): void {
        const postStat = this.model.getPostStat();
        renderPostStat(postStat);
        this.comments = this.model.getComments();
        renderComments(this.comments, HOW_MANY_COMMENTS_ONCE_RENDER);
    }

    addListenerToSendAnswerToCommentButton() {}
    addListenerToSetLikeToCommentButton(){}
    addListenerToSendCommentButton() {
        document.
            querySelector('.pull-right'). 
            addEventListener('click', () => {

            });
    }
    addListenerToSetLikeToPostButton() {
        document. 
            querySelector('.like-call a'). 
            addEventListener('click', evt => {
                evt.preventDefault();
            });
    }
    addListenerToShowMoreCommentButton() {
        document.
            querySelector('.button-show-more-comments').
            addEventListener('click', () => {
                renderComments(this.comments, HOW_MANY_COMMENTS_ONCE_RENDER);
            });
    }
}