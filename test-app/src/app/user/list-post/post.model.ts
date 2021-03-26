

export class PostModel {

    constructor(userid, id, title, body) {
        this.userID = userid;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    userID: number;
    id: number;
    title: string;
    body: string;
}