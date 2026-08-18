# Cypress QA Bootcamp

Project ini merupakan implementasi **Web Automation Testing menggunakan Cypress** sebagai bagian dari praktik QA Bootcamp.

## Teknologi

* Cypress
* JavaScript
* Mochawesome Reporter
* Chrome

## Test Case

### System Testing

File: `cypress/e2e/auth/login_spec.cy.js`

Terdapat 5 test case:

* LGN-001 — Login menggunakan email dan password valid
* LGN-002 — Login menggunakan email dan password tidak valid
* LGN-003 — Login tanpa mengisi email dan password
* LPSW-001 — Membuka halaman Lupa Password
* DB-001 — Membuka halaman Wishlist

### End-to-End Testing

File: `cypress/e2e/auth/e2e_spec.cy.js`

Terdapat 3 test case:

* PRDCT-001 — Membuka katalog produk
* FVRT-001 — Menambahkan produk ke Favorite
* FVRT-002 — Menghapus produk dari Favorite

**Total: 8 test cases**

## Testing Strategy

Pengujian menggunakan fitur **Automatic Waiting & Retry-ability** bawaan Cypress.

Tidak menggunakan hardcoded wait seperti:

```javascript
cy.wait(5000)
```

Assertion menggunakan Cypress `should()` dan `and()` untuk melakukan verifikasi terhadap:

* URL
* Visibility
* Element state
* Value dan attribute

## Menjalankan Test

Install dependency:

```bash
npm install
```

Menjalankan seluruh test:

```bash
npx cypress run
```

Menjalankan test menggunakan Chrome:

```bash
npx cypress run --browser chrome
```

Menjalankan System Testing:

```bash
npx cypress run --spec "cypress/e2e/auth/login_spec.cy.js" --browser chrome
```

Menjalankan E2E Testing:

```bash
npx cypress run --spec "cypress/e2e/auth/e2e_spec.cy.js" --browser chrome
```

## Test Report

Hasil eksekusi pengujian dibuat menggunakan **Mochawesome Reporter**.

Report HTML tersedia di:

`mochawesome-report/index.html`

Hasil pengujian terakhir:

* System Testing: **5 Passed**
* E2E Testing: **3 Passed**
* Total: **8 Passed**
