const SortByPopular = require('./sort').SortByPopular;
const SortByDiscussed = require('./sort').SortByDiscussed;
const SortByPublishDate = require('./sort').SortByPublishDate;

class SortFactory{
    constructor() {
       this._buttonClassToSortStrategy =  new Map([
            ['button-most-popular', () => new SortByPopular()],
            ['button-most-discussed', () => new SortByDiscussed()],
            ['button-publish-date', () => new SortByPublishDate()]
        ]);
    }
    createSortStrategy(buttonClasses) {
        for(let key of this._buttonClassToSortStrategy)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this._buttonClassToSortStrategy.get(key[0])();
    }
}

module.exports = SortFactory;