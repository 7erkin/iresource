const SortByPopular = require('./sort').SortByPopular;
const SortByDiscussed = require('./sort').SortByDiscussed;
const SortByOpenDate = require('./sort').SortByOpenDate;

class SortFactory{
    constructor() {
       this._buttonClassToSortStrategy =  new Map([
            ['button-most-popular', () => new SortByPopular()],
            ['button-most-discussed', () => new SortByDiscussed()],
            ['button-open-date', () => new SortByOpenDate()]
        ]);
    }
    createSortStrategy(buttonClasses) {
        for(let key of this._buttonClassToSortStrategy)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this._buttonClassToSortStrategy.get(key[0])();
    }
}

module.exports = SortFactory;