class ShippingPage {
  shippingAddressCard() {
    return cy.get(".shipping-address-item");
  }

  shippingMethodFiveDollarOption() {
    return cy.get(":nth-child(1) > :nth-child(1) > .radio");
  }

  nextButton() {
    return cy.get(".button");
  }
}

export default ShippingPage;
