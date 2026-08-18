describe('Halvora - End to End Testing', () => {

  beforeEach(() => {
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

    cy.url().should('eq', 'https://storefront-islamic.wins.web.id/');
  });

it('FVRT-002 - Menghapus produk dari Favorite', () => {

 cy.visit('/wishlist');

  cy.url().should('include', '/wishlist');

  cy.get('button[aria-label="Toggle Wishlist"]')
    .first()
    .should('be.visible')
    .click({ force: true });
});


it('FVRT-001 - Menambahkan produk ke Favorite', () => {

  cy.visit('/catalog');

  cy.get('button[aria-label="Toggle Wishlist"]')
    .first()
    .should('be.visible')
    .click({ force: true });

});
  it('SCRT-001 - Melihat produk di Keranjang', () => {

    cy.get('a[href="/cart"]')
      .should('be.visible')
      .click();

    cy.url()
      .should('eq', 'https://storefront-islamic.wins.web.id/cart');

  });

});