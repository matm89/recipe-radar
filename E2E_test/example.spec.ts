import { test, expect } from '@playwright/test';
import { mockTomatoDataRecipes } from './mocks/mockTomatoDataRecipes';
import { mockGreenTomatoSalad } from './mocks/mockGreenTomatoSalad';
import fs from 'fs';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  //* Expect a title "to contain" a substring
  await expect(page).toHaveTitle(/Recipe Radar/);
});

//* Test homepage. Working searchbar and popular recipes
test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('http://localhost:3000/recipes/random', async route => {
      const json = mockTomatoDataRecipes;
      await route.fulfill({json});
    });
    
    await page.route('http://localhost:3000/recipes?ingredients=tomato', async route => {
      const json = mockTomatoDataRecipes;
      await route.fulfill({json});
    });
    
    await page.goto('http://localhost:5173/');
  });

  test('SearchBar search tomato recipes', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Search recipes...' }).click();
    await page.getByRole('textbox', { name: 'Search recipes...' }).fill('tomato');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('div').filter({ hasText: 'Search results for \'tomato\'' }).nth(2)).toBeVisible();
  });

  test('Popular recipes', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Popular Recipes' })).toBeVisible();
  });
});

//* Test favourites functionality
test.describe('Favourites', ()=>{

  test.beforeEach(async ({ page }) => {
    await page.route('http://localhost:3000/recipes/random', async route => {
      const json = mockTomatoDataRecipes;
      await route.fulfill({json});
    });
    
    await page.route('http://localhost:3000/recipe/645555', async route => {
      const json = mockGreenTomatoSalad;
      await route.fulfill({json});
    });
    
    if (fs.existsSync('database.sqlite')) {
     await fs.unlinkSync('database.sqlite');
    }

    await page.goto('http://localhost:5173/');
  });



  test('Add favourite recipe', async ({ page }) => {
    await page.getByRole('link', { name: 'Favorite Recipes' }).click();
    await expect(page.getByRole('heading', { name: 'Favorite Recipes' })).toBeVisible();
    await expect(page.getByText('You don\'t have any favorite')).toBeVisible();
    await page.getByRole('link', { name: 'reciepe-radar-logo Recipe' }).click();
    await page.getByRole('heading', { name: 'Green Tomato Salad' }).click();
    await page.locator('svg').nth(2).click();
    await page.getByRole('link', { name: 'Favorite Recipes' }).click();
    await expect(page.getByRole('heading', { name: 'Green Tomato Salad' })).toBeVisible();
  });
  //! The API requested payment. We should never use the real API!
});
