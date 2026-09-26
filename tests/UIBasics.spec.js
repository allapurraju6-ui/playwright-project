import test from '@playwright/test'

test ('UIDD', async({page})=>
{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("[id='username']").fill("rahul");
await page.locator("[id='password']").fill("Learning@830$3mK2");
await page.locator(".radiotextsty").last();
await page.locator("select.form-control").selectOption("consult");
await page.locator("[id='terms']").click();
await page.pause();




})