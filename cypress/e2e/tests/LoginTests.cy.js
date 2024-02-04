/// <reference types= "cypress"/>

import { faker } from "@faker-js/faker";

import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import ToastsPage from "../pages/ToastsPage";

describe("Login tests", () => {
  const header = new HeaderPage();
  const login = new LoginPage();
  const toasts = new ToastsPage();

  beforeEach(function () {
    cy.fixture("accounts").then(function (account) {
      this.account = account;
    });
    cy.visit(Cypress.env("baseUrl"));
    header.guestWelcomeMessage().should("be.visible");
  });

  it("Login with valid credentials", function () {
    header.loginButton().click();

    login.pageTitle().should("be.visible", { timeout: 2000 });
    login.emailInputField().type(this.account.email);
    login.passwordInputField().type(this.account.password);
    login.signInButton().click();

    header.loggedWelcomeMessage().should("contain", "Veronica Costello");
  });

  it("Login with invalid email", function () {
    header.loginButton().click();

    login.pageTitle().should("be.visible", { timeout: 2000 });
    login.emailInputField().type(faker.internet.email());
    login.passwordInputField().type(this.account.password);
    login.signInButton().click();

    toasts.errorMessage().should("be.visible", { timeout: 3000 })
  });

  it("Login with invalid password", function () {
    header.loginButton().click();

    login.pageTitle().should("be.visible", { timeout: 2000 });
    login.emailInputField().type(this.account.email);
    login.passwordInputField().type(faker.internet.password());
    login.signInButton().click();

    toasts.errorMessage().should("be.visible", { timeout: 3000 })
  });
});
