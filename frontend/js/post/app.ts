import { Model } from "./model";
import { Controller } from "./controller";
import { View } from "./view";

export class Application {
    constructor() {}
    init() {
        const model = new Model();
        const controller = new Controller(model);
        const view = new View(controller, model);
    }
}