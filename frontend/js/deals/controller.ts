import { ControllerInterface, ModelInterface } from "./interfaces";
import { FilterStrategyFactory } from "./strategy/filter-factory";
import { SortStrategyFactory } from "./strategy/sort-factory";
import { SearchByCompanyName } from "./strategy/search";


export class Controller implements ControllerInterface {
    private model: ModelInterface;
    private filterFactory;
    private sortFactory;

    constructor(model: ModelInterface){
        this.model = model;
        this.filterFactory = new FilterStrategyFactory();
        this.sortFactory = new SortStrategyFactory();
    }

    onFilterButtonClicked(clickedButtonClasses: Array<string>){
        const strategyInstance = this.filterFactory.createStrategy(clickedButtonClasses);
        this.model.setFilterStrategy(strategyInstance);
        this.model.filter();
    }
    onSortButtonClicked(clickedButtonClasses: Array<string>){
        const strategyInstance = this.sortFactory.createStrategy(clickedButtonClasses);
        this.model.setSortStrategy(strategyInstance);
        this.model.sort();
    }
    onSearchButtonClicked(clickedButtonClasses: Array<string>, inputValue: string){
        if(inputValue === '') {
            return;
        }
        const strategyInstance = new SearchByCompanyName(inputValue);
        this.model.setSearchStrategy(strategyInstance);
        this.model.search();
    }
    onPaginationButtonClicked(){}
}