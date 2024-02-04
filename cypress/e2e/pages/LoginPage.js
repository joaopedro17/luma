class LoginPage {
  pageTitle() {
    return cy.get(".page-title-wrapper");
  }

  emailInputField() {
    return cy.get("#email");
  }

  passwordInputField() {
    return cy.get("#pass");
  }

  signInButton() {
    return cy.get("#send2");
  }

  forgotPassword() {
    return cy.get(".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > .secondary > .action > span");
  }

  createAccountButton() {
    return cy.get(".login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action");
  }

  loginValidCredentials(email, password) {
    this.pageTitle().should("be.visible");
    this.emailInputField().type(email);
    this.passwordInputField().type(password);
    this.signInButton().click();
  }
}

export default LoginPage;
