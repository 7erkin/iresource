import {FilterByActiveDeals, FilterByClosedDeals} from './filter';
import { FilterStrategyInterface } from '../interfaces';

export class FilterStrategyFactory {
    private buttonClassToFilterInterface = new Map([
        ['button-active-deals', () => {
            return new FilterByActiveDeals(); 
        }],
        ['button-closed-deals',  () => {
            return new FilterByClosedDeals(); 
        }]
    ]);
    createStrategy(buttonClasses: Array<string>): FilterStrategyInterface {
        for(let key of this.buttonClassToFilterInterface)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this.buttonClassToFilterInterface.get(key[0])();
    }
}