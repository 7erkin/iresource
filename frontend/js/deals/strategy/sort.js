class SortStrategy {
    constructor(strategy){
        this.sort = strategy
    }
}

class SortByPopular extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.like + deal2.like));
    }
}

class SortByDiscussed extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.comment + deal2.comment));
    }
}

class SortByOpenDate extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.dateOpen + deal2.dateOpen));
    }
}

module.exports.SortByPopular = SortByPopular;

module.exports.SortByDiscussed = SortByDiscussed;

module.exports.SortByOpenDate = SortByOpenDate;