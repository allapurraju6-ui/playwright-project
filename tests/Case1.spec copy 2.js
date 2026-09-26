import { expect, test } from '@playwright/test';
//const {test} = require('@playwright/test');

test('scene1', async({browser})=>
{
const context = await browser.newContext();
const page = await context.newPage();


await page.goto("https://github.com/");
    console.log(await page.title());
   await expect(page).toHaveTitle("GitHub · Change is constant. GitHub keeps you ahead. · GitHub");
});

test('Scene2', async({page})=>
{
   await  page.goto("https://google.com");
   console.log(await page.title());
   await expect(page).toHaveTitle("Google");
});

test.only('scene3', async({page})=>
{
 const userNM = page.locator("[id='username']");
 const card = page.locator(".card-body a");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("[id='username']").fill("rahul");
await page.locator("[id='password']").fill("Learning@830$3mK2");
await page.locator("[id='signInBtn']").click();
console.log(await page.locator("[style='display: block;']").textContent());
await expect(page.locator("[style='display: block;']")).toContainText('Incorrect');
await userNM.fill("");
await userNM.fill("rahulshettyacademy");
await page.locator("[id='signInBtn']").click();
//console.log(await card.first().textContent());
//console.log(await card.nth(3).textContent());
await page.waitForLoadState('networkidle');
await card.first().waitFor();
const allTitles= await card.allTextContents();
console.log(allTitles);
}


)