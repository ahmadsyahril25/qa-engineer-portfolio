# Playwright Automation Testing

Project ini merupakan hasil pembelajaran mandiri dalam bidang **QA Automation** menggunakan **Playwright** dan **JavaScript**.

Project ini dibuat untuk mempraktikkan proses automation testing pada beberapa fitur website menggunakan pendekatan **End-to-End (E2E) Testing** dan **Page Object Model (POM)**.

## 🛠️ Teknologi yang Digunakan

- Playwright
- JavaScript
- Node.js
- Visual Studio Code

## 🧪 Skenario Pengujian

Project ini mencakup beberapa skenario automation testing:

| Fitur | Skenario Pengujian |
|---|---|
| Login | Login menggunakan email dan password yang valid |
| Login | Login dengan email kosong |
| Add to Cart | Menambahkan produk ke dalam keranjang |
| Checkout | Melakukan proses checkout |

## 📂 Struktur Project

```text
Playwright-Automation/
│
├── pages/
│   ├── cartpage.js
│   ├── checkoutpage.js
│   ├── inventorypage.js
│   └── loginpage.js
│
├── tes/
│   ├── checkout.spec.js
│   └── login.spec.js
│
├── .gitignore
├── catatan.txt
├── package.json
├── package-lock.json
├── playwright.config.js
└── README.md

🧩 Page Object Model (POM)

Project ini menggunakan pendekatan Page Object Model (POM) untuk memisahkan elemen dan interaksi halaman dari test case.

Page Object yang digunakan:
-LoginPage
-InventoryPage
-CartPage
-CheckoutPage

Penggunaan POM membantu membuat kode automation lebih terstruktur, reusable, dan mudah dipelihara.

🚀 Instalasi

Pastikan Node.js sudah terinstall.

Clone repository:
git clone https://github.com/ahmadsyahril25/qa-engineer-portfolio.git

Masuk ke folder Playwright:
cd qa-engineer-portfolio/Playwright-Automation

Install dependency:
npm install

Install browser Playwright:
npx playwright install

▶️ Menjalankan Test

Menjalankan seluruh test:
npx playwright test

Menjalankan test dengan browser terlihat:
npx playwright test --headed

Menjalankan test Login:
npx playwright test tes/login.spec.js

Menjalankan test Checkout:
npx playwright test tes/checkout.spec.js

📊 Test Report

Untuk melihat hasil pengujian dalam bentuk HTML Report:
npx playwright show-report

📚 Pembelajaran

Melalui project ini, saya mempraktikkan:
-Dasar penggunaan Playwright
-JavaScript untuk Automation Testing
-Locator
-Assertion
-Positive Testing
-Negative Testing
-End-to-End (E2E) Testing
-Page Object Model (POM)
-Test Execution
-HTML Test Report

👨‍💻 Author
Ahmad Syahril
Fokus: Quality Assurance / Software Testing
