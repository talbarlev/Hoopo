import { Locator, Page } from "playwright-core";
import { BasePage } from "../pages/base/base-page";

export class CheckAvailabilityPage extends BasePage {
    constructor(protected page: Page) {
        super(page)
    }

    protected get pageLocator(): Locator {
        return this.page.locator("#booking .booking-card");
    }

    private get checkinbox(): Locator {
        return this.pageLocator.locator("input.form-control").nth(0);
    }

    private get checkoutBox(): Locator {
        return this.pageLocator.locator("input.form-control").nth(1);
    }

    private get checkButton(): Locator {
        return this.pageLocator.getByRole('button', { name: 'Check Availability' });
    }

    // TODO : change dates validation
    public async fillDates(checkin: string = "21/07/2025", checkout: string = "23/07/2025") {
        await this.checkinbox.fill(checkin);
        await this.checkoutBox.fill(checkout);

        await this.checkButton.click()
    }



}