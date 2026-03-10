import { Locator, Page } from "playwright/test";

export class LoginPage {
          readonly page: Page
          readonly usernameInput: Locator
          readonly passwordInput: Locator
          readonly loginButton: Locator


          constructor(page:Page) {
                    this.page = page
                    this.usernameInput = page.locator('#username')
                    this.passwordInput = page.locator('#password')
                    this.loginButton = page.locator('button[type="submit"]')

          }

          async goto() {
                    await this.page.goto('https://the-internet.herokuapp.com/login')
          }


          async login(user:string, password:string) {
                    await this.usernameInput.fill(user)
                    await this.passwordInput.fill(password)
                    await this.loginButton.click()
          }
} 