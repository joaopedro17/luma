class HeaderPage {
  guestWelcomeMessage() {
    return cy.contains("Default welcome msg!");
  }

  loggedWelcomeMessage() {
    return cy.get(":nth-child(2) > .greet > .logged-in");
  }

  loginButton() {
    return cy.get(".panel > .header > .authorization-link > a");
  }

  createAccountButton() {
    return cy.get(".panel > .header > :nth-child(3) > #idUuTSK2ip");
  }

  searchBarInputField() {
    return cy.get("#search");
  }

  womenSection() {
    cy.get("#ui-id-4");
  }

  cartIcon() {
    return cy.get(".showcart");
  }
}

export default HeaderPage;
