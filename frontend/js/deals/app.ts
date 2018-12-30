import { Model } from "./model";
import { View } from "./view";
import { Controller } from "./controller";
import { WaitScreenSaver } from "./wait-screen-saver";


export class Application{
    init() {
        const waitScreenSaver = new WaitScreenSaver();

        waitScreenSaver.set();

        const model = new Model();
        const controller = new Controller(model);

        waitScreenSaver.remove();

        const view = new View(controller, model);
        view.initUpdate();
    } 
}