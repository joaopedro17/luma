class OrderConfirmationPage {
  pageTitle() {
    return cy.get(".page-title-wrapper");
  }

  printReceipt() {
    return cy.get(".page-title-wrapper > .action");
  }

  orderNumber() {
    return cy.get(".order-number > strong");
  }

  continueShippingButton() {
    return cy.get(".checkout-success > .actions-toolbar > div.primary > .action");
  }
}

export default OrderConfirmationPage;
