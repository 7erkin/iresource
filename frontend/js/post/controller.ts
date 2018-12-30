import { ControllerInterface } from "./interfaces";
import { ModelInterface } from "./interfaces";


export class Controller implements ControllerInterface {
    private model: ModelInterface;

    constructor(model: ModelInterface) {
        this.model = model;
    }

    onLikePostButtonClicked(): void {
        this.model.sendLikeToPost();
    }
    onLikeCommentButtonClicked(likedCommentId: number): void {
        this.model.sendLikeToComment(likedCommentId);
    }
    onSendCommentButtonClicked(inputText: string): void {
        this.model.sendCommentToPost(inputText);
    }
    onSendAnswerToCommentButtonClicked(answeredCommentId: number, inputText: string): void {
        this.model.sendAnswerToComment(answeredCommentId, inputText);
    }
}