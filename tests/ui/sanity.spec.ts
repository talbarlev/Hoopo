import { test, expect } from "@playwright/test";
import HomePage from "../../pages/home-page";

test.describe("UI", () => {
    test("[Sanity] Searching for a room", async ({ page }) => {
       await  page.goto("https://automationintesting.online/");

        const homePage = new HomePage(page);

       await homePage.checkAvilabilty.fillDates();


    });
});