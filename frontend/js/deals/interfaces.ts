export type Deal = {
    name: string;
    dateOpen: number;
    dateClosed: number;
    like: number;
    comment: number;
    watcher: number;
    image: string;
};

export interface ViewInterface {
    update(): void;
};

export interface ModelInterface {
    addSubscriber(subscriber: ViewInterface): void;
    removeSubscriber(subscriber: ViewInterface): void;
    getData(): Readonly<any>; // interesting properties below

    setFilterStrategy(strategy: FilterStrategyInterface): void;
    setSortStrategy(strategy: SortStrategyInterface): void;
    setSearchStrategy(strategy: SearchStrategyInterface): void;

    filter(): void;
    sort(): void;
    search(): void;
};

export interface ControllerInterface {
    onSearchButtonClicked(clickedButtonClasses: Array<string>, inputValue: string): void;
    onSortButtonClicked(clickedButtonClasses: Array<string>): void;
    onFilterButtonClicked(clickedButtonClasses: Array<string>): void;
    onPaginationButtonClicked(): void;
};

export interface FilterStrategyInterface {
    filter(deals: Array<Deal>): Array<Deal>;
};

export interface SortStrategyInterface {
    sort(deals: Array<Deal>): void;
};

export interface SearchStrategyInterface {
    search(deals: Array<Deal>): Array<Deal>;
};