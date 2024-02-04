/// <reference types= "cypress"/>

import HeaderPage from "../pages/HeaderPage"
import WomenPage from "../pages/menu/WomenPage"
import ProductCustomizePage from "../pages/ProductCustomize"
import CartPage from "../pages/CartPage"


describe('Add items to cart tests', () => {
  const header = new HeaderPage()
  const women = new WomenPage()
  const customize = new ProductCustomizePage()
  const cart = new CartPage()

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    header.guestWelcomeMessage().should('be.visible')
  })

  it('Add item by search feature', () => {
    header.searchBarInputField().type('Balboa{enter}')

    search.balboaPersistenceShirt().click()

    customize.largeSizeOption().click()
    customize.grayColorOption().click()
    customize.addToCartButton().click()

    cy.wait(3000)

    header.cartIcon().click()

    cy.wait(2000)

    cart.cartModal().should('be.visible', { timeout: 2000 })
    cart.itemDetails().should('be.visible')
    cart.proceedToCheckoutButton().should('be.visible')
  })

  it('Add item through the women section', () => {
    header.womenSection().click()

    women.jacketsOption().click()
    women.oliviaJacket().click()

    customize.mediumSizeOption().click()
    customize.blackColorOption().click()
    customize.addToCartButton().click()

    cy.wait(3000)

    header.cartIcon().click()

    cy.wait(2000)

    cart.cartModal().should('be.visible', { timeout: 2000 })
    cart.itemDetails().should('be.visible')
    cart.proceedToCheckoutButton().should('be.visible')
  })
})