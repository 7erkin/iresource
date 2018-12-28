const template = document.querySelector('#template');
const waitNode = template.content.querySelector('#wait-element'); 

class ViewWait{
    constructor() {

    }
    set(){
        const postList = document.querySelector('.post-list');
        const node = waitNode.cloneNode(true);
        postList.appendChild(node);
    }
    remove(){
        const node = document.querySelector('#wait-element');
        if(node == undefined) return;
        node.remove();
    }
}

module.exports = ViewWait;