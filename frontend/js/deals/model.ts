import { ModelInterface, Deal, ViewInterface, ControllerInterface} from "./interfaces";
import {SortStrategyInterface, FilterStrategyInterface, SearchStrategyInterface } from "./interfaces";

export class Model implements ModelInterface{
    private originalDeals: Array<Deal>;
    private transformDeals: Array<Deal>;

    private sortStrategy: SortStrategyInterface;
    private filterStrategy: FilterStrategyInterface;
    private searchStrategy: SearchStrategyInterface;

    private subscribers;
    
    constructor() {
        this.originalDeals = this.loadDeals();
        this.subscribers = new Set<ViewInterface>();
    }
    addSubscriber(subscriber: ViewInterface): void {
        this.subscribers.add(subscriber);
    }
    removeSubscriber(subscriber: ViewInterface): void {
        this.subscribers.delete(subscriber);
    }
    private notifyAll(): void {
        for(const subscriber of this.subscribers)
            subscriber.update();
    }
    getData(): Readonly<Array<Deal>> {
        return this.transformDeals;
    }
    setSortStrategy(sortStrategy: SortStrategyInterface): void {
        this.sortStrategy = sortStrategy;
    }
    setFilterStrategy(filterStrategy: FilterStrategyInterface): void {
        this.filterStrategy = filterStrategy;
    }
    setSearchStrategy(searchStrategy: SearchStrategyInterface): void {
        this.searchStrategy = searchStrategy;
    }
    sort(): void {
        this.sortStrategy.sort(this.transformDeals);
        this.notifyAll();
    }
    filter(): void {
        this.transformDeals =  this.filterStrategy.filter(this.originalDeals);
        this.notifyAll();
    }
    search(): void {
        const deals: Array<Deal> = this.searchStrategy.search(this.originalDeals);
        this.transformDeals = this.filterStrategy.filter(deals);
        this.sortStrategy.sort(this.transformDeals);
        this.notifyAll();
    }

    private loadDeals(): Array<Deal> {
        return [
            {
                name: "Polys Gold",
                dateOpen: 12345,
                dateClosed: 0,
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                name: "Aeroflot",
                dateOpen: 12345,
                dateClosed: 0,
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                name: "Phosagro",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                name: "Mechel",
                dateOpen: 12345,
                dateClosed: 0,
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                name: "Apple",
                dateOpen: 12345,
                dateClosed: 0,
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            },
            {
                name: "Polys Gold",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 10,
                comment: 10,
                watcher: 10000,
                image: 'https://vanin-invest.com/wp-content/uploads/2016/09/Polyus.jpg'
            },
            {
                name: "Aeroflot",
                dateOpen: 12345,
                dateClosed: 0,
                like: 100,
                comment: 30,
                watcher: 10000,
                image: 'https://regnum.ru/uploads/pictures/news/2017/10/11/regnum_picture_15077158461288890_big.jpg'
            },
            {
                name: "Phosagro",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 260,
                comment: 120,
                watcher: 10000,
                image: 'http://toplogos.ru/images/logo-phosagro.png'
            },
            {
                name: "Mechel",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 30,
                comment: 210,
                watcher: 10000,
                image: 'http://cdn.forbes.ru/files/presets/900_566/profile/magnit3.jpg__1506495387__73040__vid422245e.jpg'
            },
            {
                name: "Apple",
                dateOpen: 12345,
                dateClosed: 12345,
                like: 20,
                comment: 10,
                watcher: 10000,
                image: 'https://www.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg'
            }
        ];
    }
}