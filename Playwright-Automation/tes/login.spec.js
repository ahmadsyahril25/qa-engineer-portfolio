import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/inventoryPage.js';

// Positive test: login berhasil
test('Login berhasil dengan credential valid', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  // Step 1: buka halaman login
  await loginPage.goto();

  // Step 2: login
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 3: validasi masuk ke inventory page
  await inventoryPage.isLoaded();
  await expect(await inventoryPage.getTitleText()).toHaveText('Products');

});


// Negative test: login gagal
test('Login gagal dengan field kosong', async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Step 1: buka halaman
  await loginPage.goto();

  // Step 2: klik login tanpa input
  await loginPage.login('', '');

  // Step 3: validasi error muncul
  await expect(await loginPage.getErrorMessage()).toBeVisible();

});