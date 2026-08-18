describe('Authentication - Login', () => {

  beforeEach(() => {
    cy.visit('/login');
  });

  it('LGN-001 - Login menggunakan email dan password valid', () => {

    const validEmail = 'maulmalikib@gmail.com';
    const validPassword = 'inipassword';

    cy.get('#email')
      .should('be.visible')
      .and('be.enabled')
      .type(validEmail);

    cy.get('#password')
      .should('be.visible')
      .and('be.enabled')
      .type(validPassword);

    cy.contains('button', 'Log In')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.url().should('eq', 'https://storefront-islamic.wins.web.id/');

  });
 it('LGN-002 - Login menggunakan email dan password tidak valid', () => {

    const invalidEmail = 'maulmalikib@gmail.com';
    const invalidPassword = 'invalidpassword';

    cy.get('#email')
      .should('be.visible')
      .and('be.enabled')
      .type(invalidEmail);

    cy.get('#password')
      .should('be.visible')
      .and('be.enabled')
      .type(invalidPassword);

    cy.contains('button', 'Log In')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.url().should('include', '/login');

  cy.contains('li', 'Email atau password salah')
    .should('be.visible');

});
it('LGN-003 - Login tanpa mengisi email dan password', () => {

  cy.get('#email')
    .should('be.visible')
    .and('be.enabled')
    .and('have.attr', 'required');

  cy.get('#password')
    .should('be.visible')
    .and('be.enabled')
    .and('have.attr', 'required');

  cy.contains('button', 'Log In')
    .should('be.visible')
    .and('be.enabled')
    .click();

  cy.url().should('include', '/login');

    cy.get('input[type="email"]').should('have.value', '');
  cy.get('input[type="password"]').should('have.value', '');

});
it('LPSW-001 - Membuka halaman Lupa Password', () => {

    cy.contains('Forgot Password?')
      .should('be.visible');
    cy.contains('Forgot Password?')
      .click();
    cy.url().should('include', '/forgot-password');

  });

  it('DB-001 - Membuka halaman Wishlist', () => {

   
    cy.visit('/login');


    const validEmail = 'maulmalikib@gmail.com';
    const validPassword = 'inipassword';

     cy.get('#email')
      .should('be.visible')
      .and('be.enabled')
      .type(validEmail);

    cy.get('#password')
      .should('be.visible')
      .and('be.enabled')
      .type(validPassword);

    cy.contains('button', 'Log In')
      .should('be.visible')
      .and('be.enabled')
      .click();

    cy.url().should('not.include', '/login');

    cy.get('a[href="/wishlist"]')
    .should('be.visible');
  cy.get('a[href="/wishlist"]')
    .click();
  cy.url()
    .should('eq', 'https://storefront-islamic.wins.web.id/wishlist');

 
  });

});
