class ReviewAndPaymentPage {
  billingDetails() {
    return cy.get(".billing-address-details");
  }

  placeOrderButton() {
    return cy.get(".payment-method-content > :nth-child(4) > div.primary > .action");
  }

  orderSummaryCard() {
    return cy.get(".opc-block-summary");
  }

  subtotal() {
    return cy.get(".sub > .amount > .price");
  }

  shippingCost() {
    return cy.get(".shipping > .amount > .price");
  }

  taxValue() {
    return cy.get(".totals-tax > .amount > .price");
  }

  orderTotal() {
    return cy.get("strong > .price");
  }
}

export default ReviewAndPaymentPage;
