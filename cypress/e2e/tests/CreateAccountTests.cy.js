/// <reference types= "cypress"/>

import { faker } from '@faker-js/faker'

import HeaderPage from "../pages/HeaderPage"
import CreateAccountPage from "../pages/CreateAccountPage"
import ToastsPage from "../pages/ToastsPage"

describe('Create account tests', () => {
  const header = new HeaderPage()
  const create = new CreateAccountPage()
  const toasts = new ToastsPage()

  const password = faker.internet.password()

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
    header.guestWelcomeMessage().should('be.visible')
  })

  it('Create new user', () => {
    header.createAccountButton().click()

    create.pageTitle().should('be.visible', { timeout: 2000 })
    create.firstNameInputField().type(faker.person.firstName())
    create.lastNameInputField().type(faker.person.lastName())
    create.checkboxNewsletterSubscribeOption().should('be.visible')
    create.emailInputField().type(faker.internet.email())
    create.passwordInputField().type(password)
    create.confirmPasswordInputField().type(password)
    create.createAccountButton().click()

    toasts.successMessage().should('be.visible', { timeout: 2000 })
  })
})