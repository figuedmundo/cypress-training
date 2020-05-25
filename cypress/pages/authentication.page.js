/// <reference types="Cypress" />

export default class Authentication {

  constructor() {
    this.uriPath = '/index.php?controller=authentication&back=my-account';
    this.emailTextbox = '#email_create';
    this.emailLabel = 'form#create-account_form div.form-group label';
    this.submitBtn = '#SubmitCreate';
    this.emailForm = "form#create-account_form div.form-group";

    // cy.get(this.emailTextbox).as('emailTextbox');

  }

  email() {
    return cy.get(this.emailTextbox)
  }

  setEmail(email) {
    cy.get(this.emailTextbox).type(email)
    cy.get(this.emailLabel).click()
  }

  validateEmailOk() {
    cy.get(this.emailForm).should('have.class', 'form-ok')
  }

  clickSubmit() {
    return cy.get(this.submitBtn).click();
  }
}
