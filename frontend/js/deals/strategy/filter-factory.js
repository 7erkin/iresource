const FilterByActiveDeals = require('./filter').FilterByActiveDeals;
const FilterByClosedDeals = require('./filter').FilterByClosedDeals;

class FilterFactory{
    constructor(){
        this._buttonClassToFilterStrategy = new Map([
            ['button-active-deals', () => {
                return new FilterByActiveDeals(); 
            }],
            ['button-closed-deals',  () => {
                return new FilterByClosedDeals(); 
            }]
        ]);
    }

    createFilterStrategy(buttonClasses, args) {
        for(let key of this._buttonClassToFilterStrategy)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this._buttonClassToFilterStrategy.get(key[0])(args);
    }
}

module.exports = FilterFactory;