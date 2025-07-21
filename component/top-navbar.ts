import { Locator } from "playwright-core";
import { BasePage } from "../pages/base/base-page";

export class TopNavbarPage extends BasePage {
    protected get pageLocator(): Locator {
        throw new Error("Method not implemented.");
    }

    get tabsLocator(): string {
        return "li .nav-link";
    }

    /**
   * Navigate to a specific tab by its visible name
   */
    async navigateToTab(tabName: string) {
        const tabToClick = this.page.locator(this.tabsLocator, { hasText: tabName });

        await tabToClick.click();
    }
}