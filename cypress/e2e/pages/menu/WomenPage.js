class WomenPage {
  jacketsOption() {
    return cy.get(".categories-menu > :nth-child(2) > :nth-child(2) > a");
  }

  oliviaJacket() {
    return cy.get(":nth-child(1) > .product-item-info");
  }
}

export default WomenPage;
