import { SearchStrategyInterface, Deal } from "../interfaces";


export class SearchByCompanyName implements SearchStrategyInterface {
    private companyName;
    constructor(companyName: string) {
        this.companyName = companyName;
    }
    search(deals: Readonly<Array<Deal>>): Array<Deal> {
        return deals.filter(deal => deal.name.toUpperCase() == this.companyName.toUpperCase())
    }
}