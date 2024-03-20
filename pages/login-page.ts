import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.emailField = page.locator('input[placeholder="Email"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginButton = page.locator('button[type="submit"]');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async fillEmailField(email: string)  {
    await this.emailField.fill(email);
  }

  async fillPasswordField(password: string)  {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmailField(email);
    await this.fillEmailField(password);
    await this.clickLoginButton();
  }

  async shouldBeOpen() {
    await expect(this.page).toHaveTitle(/Login · SampleSite/);
  }
}