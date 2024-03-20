import { expect, type Locator, type Page } from '@playwright/test';

export class SearchCandidatesPage {
  readonly page: Page;
  readonly jobSeekerSearchForm: Locator;
  readonly occupation: Locator;
  readonly occupationOptions: Locator;
  readonly specialty: Locator;
  readonly specialtyOptions: Locator;
  readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.jobSeekerSearchForm = page.locator('.job-seeker-search-form');
    this.searchResults = page.locator('.job-seeker-profile');
    this.occupation = this.jobSeekerSearchForm.locator('xpath=//select[@id="company_job_seeker_profile_filter_occupation"]/parent::div');
    this.occupationOptions = this.jobSeekerSearchForm.locator('xpath=//select[@id="company_job_seeker_profile_filter_occupation"]/parent::div//ul[@class="options"]');
    this.specialty = this.jobSeekerSearchForm.locator('xpath=//select[@id="company_job_seeker_profile_filter_specialty"]/parent::div');
    this.specialtyOptions = this.jobSeekerSearchForm.locator('xpath=//select[@id="company_job_seeker_profile_filter_specialty"]/parent::div//ul[@class="options"]');
  }

  async goto() {
    await this.page.goto('/search');
  }

  async selectOccupation(occupation: string) {
    await this.occupation.hover();
    await this.occupationOptions.getByText(occupation, { exact: true }).click();
  }

  async selectSpecialty(specialty: string) {
    await this.specialty.hover();
    await this.specialtyOptions.getByText(specialty, { exact: true }).click();
    await this.page.waitForResponse('**/search**');
  }

  async searchResultsShouldBeDisplayed() {
    await expect(this.searchResults).toHaveCount(10);
  }

  async shouldBeOpen() {
    await expect(this.page).toHaveTitle(/Search Candidates · SampleSite/);
  }
}