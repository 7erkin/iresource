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

class SortByPublishDate extends SortStrategy {
    constructor() {
        super((deals) => deals.sort((deal1, deal2) => -deal1.datePublish + deal2.datePublish));
    }
}

module.exports.SortByPopular = SortByPopular;

module.exports.SortByDiscussed = SortByDiscussed;

module.exports.SortByPublishDate = SortByPublishDate;