class FilterStrategy{
    constructor(strategy) {
        this.filter = strategy;
    }
}

class FilterByActiveDeals extends FilterStrategy {
    constructor() {
        super(deals => deals.filter(deal => deal.dateClosed === ''));
    }
}

class FilterByClosedDeals extends FilterStrategy {
    constructor() {
        super(deals => deals.filter(deal => deal.dateClosed !== ''));
    }
}
        
module.exports.FilterByClosedDeals = FilterByClosedDeals;

module.exports.FilterByActiveDeals = FilterByActiveDeals;
