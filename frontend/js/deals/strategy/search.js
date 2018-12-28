class SearchStrategy{
    constructor(strategy){
        this.search = strategy;
    }
}
class SearchByCompanyName extends SearchStrategy {
    constructor(companyname) {
        super(deals => deals.filter(deal => deal.name.toUpperCase() == companyname.toUpperCase()));
    }
}

module.exports = SearchByCompanyName;