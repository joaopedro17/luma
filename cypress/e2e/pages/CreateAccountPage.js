class CreateAccountPage {
  pageTitle() {
    return cy.get(".page-title-wrapper");
  }

  firstNameInputField() {
    return cy.get("#firstname");
  }

  lastNameInputField() {
    return cy.get("#lastname");
  }

  checkboxNewsletterSubscribeOption() {
    return cy.get("#is_subscribed");
  }

  emailInputField() {
    return cy.get("#email_address");
  }

  passwordInputField() {
    return cy.get("#password");
  }

  confirmPasswordInputField() {
    return cy.get("#password-confirmation");
  }

  createAccountButton() {
    return cy.get("#form-validate > .actions-toolbar > div.primary > .action");
  }
}

export default CreateAccountPage;
