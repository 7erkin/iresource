module.exports.removePosts = () => {
    document.
        querySelector('.post-list').innerHTML = '';
};

module.exports.renderPosts = posts => {
    const templateElement = document.getElementById('template');
    const templatepostNode = templateElement.content.querySelector('.post-item');
    const fragment = document.createDocumentFragment();
    posts.forEach(post => {
        let postNode = templatepostNode.cloneNode(true);
        postNode.querySelector('.post-item-name').innerText = post.name;
        postNode.querySelector('img').src = post.image;
        postNode.querySelector('.likes').innerText = post.like;
        postNode.querySelector('.comments').innerText = post.comment;
        postNode.querySelector('.publish-date').innerText = post.datePublish;
        postNode.querySelector('.watchers').innerText = post.watcher;
        postNode.querySelector('.read-post').href = `/post/${post.id}`;
        fragment.appendChild(postNode);
    });
    document.querySelector('.post-list').appendChild(fragment);
};

module.exports.getActiveSortButton = () => document.querySelector('#sort .button-active');

module.exports.isActiveFilterChoosen = (node) => {
    return Array.prototype.indexOf.call(node.classList, 'button-active') === 0;
};

module.exports.updateActiveButton = (parentCssSelector, node) => {
    const activeButtonNode = document.querySelector(parentCssSelector + ' .' + 'button-active');
    activeButtonNode.classList.remove('button-active');
    node.classList.add('button-active');
};

module.exports.clearSearchForm = () => document.querySelector('.form-search input').value = '';