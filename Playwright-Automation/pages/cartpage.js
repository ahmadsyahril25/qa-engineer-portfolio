export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItem = '.inventory_item_name';
    this.checkoutButton = '#checkout';
  }

  // Validasi item ada di cart
  async getCartItem() {
    return this.page.locator(this.cartItem);
  }

  // Klik checkout
  async clickCheckout() {
    await this.page.click(this.checkoutButton);
  }
}