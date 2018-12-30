export const removeDeals = () => document.querySelector('.deal-list').innerHTML = '';

export const renderDeals = deals => {
    const templateElement = document.getElementById('template');
    const templateDealNode = (<HTMLTemplateElement>templateElement).content.querySelector('.deal-item');
    const fragment = document.createDocumentFragment();
    deals.forEach(deal => {
        let dealNode = <Element>templateDealNode.cloneNode(true);
        (<HTMLSpanElement>dealNode.querySelector('.deal-item-name')).innerText = deal.name;
        dealNode.querySelector('img').src = deal.image;
        (<HTMLSpanElement>dealNode.querySelector('.likes')).innerText = deal.like;
        (<HTMLSpanElement>dealNode.querySelector('.comments')).innerText = deal.comment;
        (<HTMLSpanElement>dealNode.querySelector('.date-open')).innerText = deal.dateOpen;
        (<HTMLSpanElement>dealNode.querySelector('.watchers')).innerText = deal.watcher;
        (<HTMLAnchorElement> dealNode.querySelector('.read-deal')).href = `/post/${deal.id}`;
        fragment.appendChild(dealNode);
    });
    document.querySelector('.deal-list').appendChild(fragment);
};

export const getActiveSortButton = () => document.querySelector('#sort .button-active');

export const getActiveFilterButton = () => document.querySelector('#filter .button-active');

export const isActiveFilterChoosen = node => Array.from(node.classList).indexOf('button-active') === 0;

export const updateActiveButton = (parentCssSelector, node) => {
    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');
    activeButtonNode.classList.remove('button-active');
    node.classList.add('button-active');
};

export const clearSearchForm = () => (<HTMLInputElement>document.querySelector('.form-search input')).value = '';