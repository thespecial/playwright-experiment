import { test } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { LoginPage } from '../pages/login-page';
import { CompanyDashboardPage } from '../pages/company-dashboard-page';
import { SearchCandidatesPage } from '../pages/search-candidates-page';

test('Candidates Search', async ({ page }) => {
  const homePage: HomePage = new HomePage(page);

  await homePage.goto();
  await homePage.navigateToLoginPage();

  const loginPage: LoginPage = new LoginPage(page);
  await loginPage.shouldBeOpen();
  await loginPage.fillEmailField('test@samplesite.com');
  await loginPage.fillPasswordField('password');
  await loginPage.clickLoginButton();

  const companyDashboardPage: CompanyDashboardPage = new CompanyDashboardPage(page);
  await companyDashboardPage.shouldBeOpen();
  await companyDashboardPage.navigateToSearchCandidatesPage();

  const searchCandidatesPage: SearchCandidatesPage = new SearchCandidatesPage(page);
  await searchCandidatesPage.shouldBeOpen();
  await searchCandidatesPage.selectOccupation('Occupation');
  await searchCandidatesPage.selectSpecialty('Specialty');
  await searchCandidatesPage.searchResultsShouldBeDisplayed();
});