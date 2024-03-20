import { expect, type Locator, type Page } from '@playwright/test';

export class CompanyDashboardPage {
  readonly page: Page;
  readonly candidatesBlock: Locator;
  readonly searchCandidatesLink: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.candidatesBlock = page.locator('ul.menu_level_1');
    this.searchCandidatesLink = this.candidatesBlock.getByRole('link', { name: "Search Candidates" });
  }

  async goto() {
    await this.page.goto('/company');
  }

  async navigateToSearchCandidatesPage()  {
    await this.searchCandidatesLink.click();
  }

  async shouldBeOpen() {
    await expect(this.page).toHaveTitle(/Dashboard · SampleSite/);
  }
}