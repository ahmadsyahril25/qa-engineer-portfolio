export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = '.title';
    this.addToCartButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  // Validasi halaman inventory kebuka
  async isLoaded() {
    await this.page.waitForSelector(this.pageTitle);
  }

  // Tambah produk ke cart
  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  // Klik icon cart
  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  // Ambil title page
  async getTitleText() {
    return this.page.locator(this.pageTitle);
  }
}