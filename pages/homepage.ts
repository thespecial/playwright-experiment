import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.locator('a.navbar-login-xs[href="/login"]');
  }

  async goto() {
    await this.page.goto('/');
  }

  async navigateToLoginPage() {
    await this.loginButton.click();
  }
}