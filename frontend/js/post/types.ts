export type Comment = {
    username: string;
    userphoto: string;
    date: number;
    text: string;
    isLikeAlreadySet: boolean;
}

export type PostStat = {
    like: number;
    watcher: number;
    comment: number;
    datePublish: number;
    isLikeAlreadySet: boolean;
};

export type PostMetaData = {
    stat: PostStat;
    comments: Array<Comment>; 
};