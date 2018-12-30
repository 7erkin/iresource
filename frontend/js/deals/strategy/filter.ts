import { FilterStrategyInterface, Deal } from "../interfaces";


export class FilterByActiveDeals implements FilterStrategyInterface{
    filter(deals: ReadonlyArray<Deal>) : Array<Deal> {
        return deals.filter(deal => deal.dateClosed === 0);
    }
}

export class FilterByClosedDeals implements FilterStrategyInterface{
    filter(deals: ReadonlyArray<Deal>) : Array<Deal> {
        return deals.filter(deal => deal.dateClosed !== 0);
    }
}