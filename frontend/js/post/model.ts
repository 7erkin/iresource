import { ModelInterface, ViewInterface } from "./interfaces";
import { Comment, PostStat, PostMetaData } from "./types";


export class Model implements ModelInterface {
    private subscribers;
    private comments: Array<Comment>;
    private postStat: PostStat;

    constructor(){
        this.subscribers = new Set<ViewInterface>();
        const postMetaData = this.loadPostMetaData();
        this.postStat = postMetaData.stat;
        this.comments = postMetaData.comments;
    }
    addSubscriber(subscriber: ViewInterface) {
        this.subscribers.add(subscriber);
    }
    removeSubscriber(subscriber: ViewInterface) {
        this.subscribers.remove(subscriber);
    }
    getComments(): ReadonlyArray<Comment> {
        return this.comments;
    } 
    getPostStat(): Readonly<PostStat> {
        return this.postStat;
    }
    sendLikeToPost(): void {
    
    }
    sendLikeToComment(commentId: number): void {
    
    }
    sendCommentToPost(text: string): void {
    
    }
    sendAnswerToComment(answeredCommentId: number, text: string): void {
    
    }

    private notifyAll(): void {
        for(const subscriber of this.subscribers)
            subscriber.update();
    }
    private loadPostMetaData(): PostMetaData {
        return {
            stat: {
                like: 10,
                watcher: 20,
                comment: 50,
                datePublish: 12345,
                isLikeAlreadySet: true
            },
            comments: [
                {
                    username: 'Bill',
                    userphoto: '#',
                    date: 213454,
                    text: 'Nice post! Go on!',
                    isLikeAlreadySet: true
                },
                {
                    username: 'Jane',
                    userphoto: '#',
                    date: 2323435,
                    text: 'Super post!',
                    isLikeAlreadySet: false
                },
                {
                   username: 'Sara',
                   userphoto: '#',
                   date: 3242342,
                   text: 'Cool!',
                   isLikeAlreadySet: true 
                }
            ]
        };
    }
}