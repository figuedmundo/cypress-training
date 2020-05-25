/// <reference types="Cypress" />

export default class AuthenticationPage {

  constructor() {
    this.uriPath = '/index.php?controller=authentication&back=my-account';
    this.emailCreateTextbox = '#email_create';
    this.emailLoginTextbox = '#email';
    this.passwordTextbox = '#passwd';
    this.emailLabel = 'form#create-account_form div.form-group label';
    this.submitBtn = '#SubmitCreate';
    this.signInBtn = '#SubmitLogin';
    this.emailForm = "form#create-account_form div.form-group";

    // cy.get(this.emailTextbox).as('emailTextbox');

  }

  email() {
    return cy.get(this.emailTextbox)
  }

  setCreateEmail(email) {
    cy.get(this.emailCreateTextbox).type(email)
    cy.get(this.emailLabel).click()
  }

  setLoginEmail(email) {
    cy.get(this.emailLoginTextbox).type(email)
  }

  setPassword(email) {
    cy.get(this.passwordTextbox).type(email)
  }

  validateEmailOk() {
    cy.get(this.emailForm).should('have.class', 'form-ok')
  }

  clickSubmit() {
    return cy.get(this.submitBtn).click();
  }

  clickSignIn() {
    return cy.get(this.signInBtn).click();
  }
}
