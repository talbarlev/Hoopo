import { Locator, Page } from "playwright-core";
import { TopNavbarPage } from "../component/top-navbar";
import { BasePage } from "./base/base-page";
import { CheckAvailabilityPage } from "../component/check-avilabilty";

export default class HomePage extends BasePage {
    protected get pageLocator(): Locator {
        throw new Error("Method not implemented.");
    }
    
    constructor(protected page: Page) {
        super(page)
    }

    get topnavbar(): TopNavbarPage {
        return new TopNavbarPage(this.page);
    }

    get checkAvilabilty() : CheckAvailabilityPage {
        return new CheckAvailabilityPage(this.page);
    }
    

}