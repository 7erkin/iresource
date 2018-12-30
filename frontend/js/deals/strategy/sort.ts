import { SortStrategyInterface, Deal } from "../interfaces";

export class SortByPopular implements SortStrategyInterface{
    sort(deals: Array<Deal>): Array<Deal>{
        return deals.sort((deal1, deal2) => -deal1.like + deal2.like);
    }
}

export class SortByDiscussed implements SortStrategyInterface{
    sort(deals: Array<Deal>): Array<Deal>{
        return deals.sort((deal1, deal2) => -deal1.comment + deal2.comment);
    }
}

export class SortByOpenDate implements SortStrategyInterface {
    sort(deals: Array<Deal>): Array<Deal>{
        return  deals.sort((deal1, deal2) => -deal1.dateOpen + deal2.dateOpen);
    }
}