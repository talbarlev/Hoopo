import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
    protected abstract get pageLocator(): Locator;

    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async getTitle(): Promise<string> {
        return this.page.title();
    }
}
