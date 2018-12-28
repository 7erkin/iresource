module.exports.removeDeals = () => {
    document.
        querySelector('.deal-list').innerHTML = '';
};

module.exports.renderDeals = deals => {
    const templateElement = document.getElementById('template');
    const templateDealNode = templateElement.content.querySelector('.deal-item');
    const fragment = document.createDocumentFragment();
    deals.forEach(deal => {
        let dealNode = templateDealNode.cloneNode(true);
        dealNode.querySelector('.deal-item-name').innerText = deal.name;
        dealNode.querySelector('img').src = deal.image;
        dealNode.querySelector('.likes').innerText = deal.like;
        dealNode.querySelector('.comments').innerText = deal.comment;
        dealNode.querySelector('.date-open').innerText = deal.dateOpen;
        dealNode.querySelector('.watchers').innerText = deal.watcher;
        dealNode.querySelector('.read-deal').href = `/post/${deal.id}`;
        fragment.appendChild(dealNode);
    });
    document.querySelector('.deal-list').appendChild(fragment);
};

module.exports.getActiveSortButton = () => document.querySelector('#sort .button-active');

module.exports.getActiveFilterButton = () => document.querySelector('#filter .button-active');

module.exports.isActiveFilterChoosen = (node) => {
    return Array.prototype.indexOf.call(node.classList, 'button-active') === 0;
};

module.exports.updateActiveButton = (parentCssSelector, node) => {
    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');
    activeButtonNode.classList.remove('button-active');
    node.classList.add('button-active');
};

module.exports.clearSearchForm = () => document.querySelector('.form-search input').value = '';