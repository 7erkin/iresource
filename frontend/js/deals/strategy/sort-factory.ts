import { SortByPopular } from "./sort";
import { SortByDiscussed } from "./sort";
import { SortByOpenDate } from "./sort";
import { SortStrategyInterface } from "../interfaces";

export class SortStrategyFactory{
    private buttonClassToSortStrategy = new Map([
        ['button-most-popular', () => new SortByPopular()],
        ['button-most-discussed', () => new SortByDiscussed()],
        ['button-open-date', () => new SortByOpenDate()]
    ]);

    createStrategy(buttonClasses: Array<string>): SortStrategyInterface {
        for(let key of this.buttonClassToSortStrategy)
            if(buttonClasses.indexOf(key[0]) !== -1)
                return this.buttonClassToSortStrategy.get(key[0])();
    }
}