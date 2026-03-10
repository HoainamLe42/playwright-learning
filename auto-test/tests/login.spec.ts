import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
// 1. Import dữ liệu từ file JSON
import loginData from '../data/loginData.json';

test.describe('Kiểm thử dữ liệu lớn - Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // 2. Vòng lặp duyệt qua từng bộ dữ liệu
  for (const data of loginData) {
    test(`Test case: ${data.case}`, async ({ page }) => {
      console.log(`Đang chạy test cho: ${data.user}`);

      await loginPage.login(data.user, data.pass);

      // 3. Kiểm tra thông báo lỗi tương ứng với từng bộ dữ liệu
      await expect(page.locator('#flash')).toContainText(new RegExp(data.expectedMessage));
    });
  }
});