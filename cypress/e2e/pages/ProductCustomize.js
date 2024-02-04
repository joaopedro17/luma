class ProductCustomizePage {
  mediumSizeOption() {
    return cy.get("#option-label-size-157-item-173");
  }

  largeSizeOption() {
    return cy.get("#option-label-size-157-item-173");
  }

  grayColorOption() {
    return cy.get("#option-label-color-93-item-52");
  }

  blackColorOption() {
    return cy.get("#option-label-color-93-item-49");
  }

  addToCartButton() {
    return cy.get("#product-addtocart-button");
  }
}

export default ProductCustomizePage;
