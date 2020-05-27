/// <reference types="Cypress" />

import { MyAccountPage } from '../'

export default class AuthenticationPage {
  constructor() {
    this._emailCreateTextbox = '#email_create';
    this._emailLoginTextbox = '#email';
    this._passwordTextbox = '#passwd';
    this._emailLabel = 'form#create-account_form div.form-group label';
    this._submitBtn = '#SubmitCreate';
    this._signInBtn = '#SubmitLogin';
    this._emailForm = "form#create-account_form div.form-group";
  }

  static visit() {
    cy.visit('/index.php?controller=authentication&back=my-account');
    return new this;
  }

  setCreateEmail(email) {
    cy.get(this._emailCreateTextbox).type(email);
    cy.get(this._emailLabel).click();
  }

  setLoginEmail(email) {
    cy.get(this._emailLoginTextbox).type(email);

    return this;
  }

  setPassword(email) {
    cy.get(this._passwordTextbox).type(email);
    return this;
  }

  validateEmailOk() {
    cy.get(this._emailForm).should('have.class', 'form-ok');
    return this;
  }

  clickCreateAnAccount() {
    cy.get(this._submitBtn).click();
    return this;
  }

  clickSignIn() {
    cy.get(this._signInBtn).click();

    return GoTo;
  }
}

class GoTo {
  static myAccountPage(){
    return new MyAccountPage();
  }
}
