const template = document.querySelector('#template');
const waitNode = (<HTMLTemplateElement>template).content.querySelector('#wait-element'); 
const dealList = document.querySelector('.deal-list');

export class WaitScreenSaver{
    set(){
        const node = waitNode.cloneNode(true);
        dealList.appendChild(node);
    }
    remove(){
        const node = document.querySelector('#wait-element');
        if(node == undefined) return;
        node.remove();
    }
}