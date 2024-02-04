class CartPage {
  cartModal() {
    return cy.get("#ui-id-1");
  }

  itemDetails() {
    return cy.get(":nth-child(1) > .product-item-details");
  }

  proceedToCheckoutButton() {
    return cy.get("#top-cart-btn-checkout");
  }
}

export default CartPage;
