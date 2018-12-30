import { removeDeals, renderDeals, getActiveSortButton, getActiveFilterButton, isActiveFilterChoosen, updateActiveButton, clearSearchForm } from "./view-library";
import { ViewInterface, ControllerInterface, ModelInterface } from "./interfaces";
import { WaitScreenSaver } from "./wait-screen-saver";

type Action = {
    activity: Function;
    args: Array<any>;
}

export class View implements ViewInterface {
    private controller: ControllerInterface;
    private model: ModelInterface;
    private waitScreenSaver: WaitScreenSaver;

    constructor(controller: ControllerInterface, model: ModelInterface) {
        this.controller = controller;
        this.model = model;
        this.waitScreenSaver = new WaitScreenSaver();

        this.model.addSubscriber(this);

        this.addListenerToFilter();
        this.addListenerToSort();
        this.addListenerToSearch();
    }

    update(): void {
        removeDeals();
        const deals = this.model.getData();
        renderDeals(deals);
    }
    initUpdate(): void {
        const activeSortButton = getActiveSortButton();
        const activeFilterButton = getActiveFilterButton();

        const sortButtonClasses: Array<string> = Array.from(activeSortButton.classList);
        const filterButtonClasses: Array<string> = Array.from(activeFilterButton.classList);

        this.waitTill([
            {
                activity: this.controller.onFilterButtonClicked.bind(this.controller),
                args: [filterButtonClasses]
            },
            {
                activity: this.controller.onSortButtonClicked.bind(this.controller),
                args: [sortButtonClasses]
            }
        ]);
    }
    addListenerToFilter() {
        document
            .getElementById('filter')
            .addEventListener('click', (evt) => {
                if((<Element>(evt.target)).tagName.toLowerCase() !== 'button')
                    return;
                if(isActiveFilterChoosen(evt.target))
                    return;

                updateActiveButton('#filter', evt.target);
                clearSearchForm();
                const buttonClasses: Array<string> = Array.from((<Element>(evt.target)).classList);
                this.waitTill([
                    {
                        activity: this.controller.onFilterButtonClicked.bind(this.controller),
                        args: [buttonClasses]
                    }
                ]);
            });
    }
    addListenerToSort() {
        document
            .getElementById('sort')
            .addEventListener('click', (evt) => {
                if((<Element>(evt.target)).tagName.toLowerCase() !== 'button')
                    return;
                if(isActiveFilterChoosen(evt.target))
                    return;

                updateActiveButton('#sort', evt.target);
                const buttonClasses: Array<string> = Array.from((<Element>(evt.target)).classList);
                this.waitTill([
                    {
                        activity: this.controller.onSortButtonClicked.bind(this.controller),
                        args: [buttonClasses]
                    }
                ]);
            });
    }
    addListenerToSearch() {
        document
            .querySelector('.form-search')
            .addEventListener('submit', evt => {
                evt.preventDefault();
                const inputValue = (<HTMLInputElement>document.querySelector('.form-search input[type="search"]')).value;
                this.waitTill([
                    {
                        activity: this.controller.onSearchButtonClicked.bind(this.controller),
                        args: [
                            ['button-search'],
                            inputValue
                        ]
                    }
                ]);
        });
    }

    private waitTill(actions: Array<Action>): void {
        this.setWaitScreenSaver();
        actions.forEach(action => action.activity(...action.args));
        this.removeWaitScreenSaver();
    }
    private setWaitScreenSaver(): void {
        this.waitScreenSaver.set();
    }
    private removeWaitScreenSaver(): void {
        this.waitScreenSaver.remove();
    }
} 