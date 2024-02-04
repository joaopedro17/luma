/// <reference types= "cypress"/>

import CartPage from "../pages/CartPage";
import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";
import OrderConfirmationPage from "../pages/OrderConfirmationPage";
import ProductCustomizePage from "../pages/ProductCustomize";
import ReviewAndPaymentPage from "../pages/checkout/ReviewAndPaymentPage";
import ShippingPage from "../pages/checkout/ShippingPage";
import SearchPage from "../pages/menu/SearchPage";

describe("Complete order tests", function () {
  const header = new HeaderPage();
  const login = new LoginPage();
  const search = new SearchPage();
  const customize = new ProductCustomizePage();
  const cart = new CartPage();
  const shipping = new ShippingPage();
  const payment = new ReviewAndPaymentPage();
  const confirmation = new OrderConfirmationPage();

  beforeEach(function () {
    cy.fixture("accounts").then(function (account) {
      this.account = account;
    });
    cy.visit(Cypress.env("baseUrl"));
    header.guestWelcomeMessage().should("be.visible");
  });

  it("Complete order logged", function () {
    let subtotal = 0;
    let tax = 0;
    let shippingCost = 0;
    let total = 0;

    header.loginButton().click();

    login.loginValidCredentials(this.account.email, this.account.password);

    cy.wait(2000);

    header.loggedWelcomeMessage().should("contain", "Veronica Costello");
    header.searchBarInputField().type("Balboa{enter}");

    search.balboaPersistenceShirt().click();

    customize.largeSizeOption().click();
    customize.grayColorOption().click();
    customize.addToCartButton().click();

    cy.wait(3000);

    header.cartIcon().click();

    cy.wait(2000);

    cart.cartModal().should("be.visible", { timeout: 2000 });
    cart.itemDetails().should("be.visible");
    cart.proceedToCheckoutButton().click();

    shipping.shippingAddressCard().should("be.visible", { timeout: 2000 });
    shipping.shippingMethodFiveDollarOption().click();
    shipping.nextButton().click();

    payment.billingDetails().should("be.visible", { timeout: 2000 });
    payment.orderSummaryCard().should("be.visible");
    payment.subtotal().invoke("text").then((text) => {
        subtotal = parseFloat(text.replace("$", "")).toFixed(2);
      });
    payment.shippingCost().invoke("text").then((text) => {
        shippingCost = parseFloat(text.replace("$", "")).toFixed(2);
      });
    payment.taxValue().invoke("text").then((text) => {
        tax = parseFloat(text.replace("$", "")).toFixed(2);
      });
    payment.orderTotal().invoke("text").then((text) => {
        total = parseFloat(text.replace("$", "")).toFixed(2);
        let totalCalc = ( parseFloat(subtotal) + parseFloat(tax) + parseFloat(shippingCost) ).toFixed(2);
        expect(total).equal(totalCalc);
      });
    payment.placeOrderButton().click();

    confirmation.pageTitle().should("be.visible", { timeout: 2000 });
    confirmation.printReceipt().should("be.visible");
    confirmation.orderNumber().should("be.visible");
    confirmation.continueShippingButton().should("be.visible");
  });
});
