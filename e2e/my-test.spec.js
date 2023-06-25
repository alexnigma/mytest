import {test, expect} from "@playwright/test";

test(`Test case № 1`, async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/`);
    await expect(page.locator(`.heading`)).toHaveText(`Welcome to the-internet`);
    await page.locator(`[href="/login"]`).click();
    await expect(page.locator(`.example`)).toContainText(`Login Page`);
    await page.locator(`#username`).type(`tomsmith`);
    await page.locator(`#password`).type(`SuperSecretPassword!`);
    await page.locator(`.radius`).click();
    await expect(page.locator(`#flash`)).toContainText(`You logged into a secure area!`);

});