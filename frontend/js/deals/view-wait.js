const template = document.querySelector('#template');
const waitNode = template.content.querySelector('#wait-element'); 

class ViewWait{
    constructor() {

    }
    set(){
        const dealList = document.querySelector('.deal-list');
        const node = waitNode.cloneNode(true);
        dealList.appendChild(node);
    }
    remove(){
        const node = document.querySelector('#wait-element');
        if(node == undefined) return;
        node.remove();
    }
}

module.exports = ViewWait;