// Class untuk handle semua element & action di halaman login
export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locator disimpan di satu tempat (biar gampang maintenance)
    this.usernameInput = '#user-name';
    this.passwordInput = '#password';
    this.loginButton = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  // Method untuk buka halaman login
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // Method login reusable
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Method untuk ambil error message
  async getErrorMessage() {
    return this.page.locator(this.errorMessage);
  }
}