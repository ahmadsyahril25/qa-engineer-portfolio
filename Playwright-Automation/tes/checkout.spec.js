import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/inventoryPage.js';
import { CartPage } from '../pages/cartPage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';

test('End-to-End: Add to Cart & Checkout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Login
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Step 2: Validasi masuk inventory
  await inventoryPage.isLoaded();

  // Step 3: Add item ke cart
  await inventoryPage.addItemToCart();

  // Step 4: Masuk ke cart
  await inventoryPage.goToCart();

  // Step 5: Validasi item ada
  await expect(await cartPage.getCartItem()).toBeVisible();

  // Step 6: Checkout
  await cartPage.clickCheckout();

  // Step 7: Isi data
  await checkoutPage.fillInformation('Ahmad', 'Syahril', '12345');

  // Step 8: Continue
  await checkoutPage.clickContinue();

  // Step 9: Finish order
  await checkoutPage.clickFinish();

  // Step 10: Validasi sukses
  await expect(await checkoutPage.getSuccessMessage())
    .toHaveText('Thank you for your order!');

});