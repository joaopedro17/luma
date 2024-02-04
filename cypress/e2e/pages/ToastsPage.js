class ToastsPage {
  successMessage() {
    return cy.get(".message-success");
  }

  errorMessage() {
    return cy.get(".message-error");
  }
}

export default ToastsPage;
