import { PostStat, Comment } from "./types";

export interface ModelInterface{
    addSubscriber(subscriber: ViewInterface): void;
    removeSubscriber(subscriber: ViewInterface): void;
    getPostStat(): Readonly<PostStat>;
    getComments(): ReadonlyArray<Comment>;
    sendLikeToPost(): void;
    sendLikeToComment(commentId: number): void;
    sendCommentToPost(text: string): void;
    sendAnswerToComment(answeredCommentId: number, text: string): void;
}

export interface ViewInterface{
    update(): void;
}

export interface ControllerInterface{
    onLikePostButtonClicked(): void;
    onLikeCommentButtonClicked(likedCommentId: number): void;
    onSendCommentButtonClicked(inputText: string): void;
    onSendAnswerToCommentButtonClicked(answeredCommentId: number, inputText: string): void;
}
