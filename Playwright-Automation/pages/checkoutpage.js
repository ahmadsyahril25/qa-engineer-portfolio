export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = '#first-name';
    this.lastName = '#last-name';
    this.postalCode = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  // Isi data checkout
  async fillInformation(first, last, zip) {
    await this.page.fill(this.firstName, first);
    await this.page.fill(this.lastName, last);
    await this.page.fill(this.postalCode, zip);
  }

  // Klik continue
  async clickContinue() {
    await this.page.click(this.continueButton);
  }

  // Klik finish
  async clickFinish() {
    await this.page.click(this.finishButton);
  }

  // Ambil pesan sukses
  async getSuccessMessage() {
    return this.page.locator(this.successMessage);
  }
}