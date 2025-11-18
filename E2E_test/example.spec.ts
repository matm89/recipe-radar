import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  //* Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Recipe Radar/);
});

//* Test homepage. Working searchbar and popular recipes
test.describe('Homepage', () => {
  test('SearchBar search tomato recipes', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('textbox', { name: 'Search recipes...' }).click();
    await page.getByRole('textbox', { name: 'Search recipes...' }).fill('tomato');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('div').filter({ hasText: 'Search results for \'tomato\'' }).nth(2)).toBeVisible();
  });

  test('Popular recipes', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await expect(page.getByRole('heading', { name: 'Popular Recipes' })).toBeVisible();
    await expect(page.getByText('Popular RecipesWatching What')).toBeVisible();
  });
});

//* Test favourites functionality
test.describe('Favourites', ()=>{
  test('Add favourite recipe', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('link', { name: 'Favorite Recipes' }).click();
    await expect(page.getByRole('heading', { name: 'Favorite Recipes' })).toBeVisible();
    await page.getByRole('link', { name: 'reciepe-radar-logo Recipe' }).click();
    await page.getByRole('textbox', { name: 'Search recipes...' }).click();
    await page.getByRole('textbox', { name: 'Search recipes...' }).fill('Turkey Pot Pie');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: 'Shredded Roast Beef Stuffed' })).toBeVisible();
    await page.getByRole('heading', { name: 'Shredded Roast Beef Stuffed' }).click();
    await page.locator('svg').nth(2).click();
    await page.getByRole('link', { name: 'Favorite Recipes' }).click();
    await expect(page.getByRole('heading', { name: 'Shredded Roast Beef Stuffed' })).toBeVisible();
  });
  //! The API requested payment. We should never use the real API!
});
