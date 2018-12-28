const path = require('path');

module.exports = {
    entry: {
        deals: './frontend/js/deals/index.js',
        posts: './frontend/js/posts/index.js',
        post: './frontend/js/post/index.js'
    },
    output: {
        filename: 'bundle-' + '[name].js',
        path: path.resolve(__dirname, 'static/js')
    },
    mode: 'development'
}