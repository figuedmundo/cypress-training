/// <reference types="Cypress" />

export default class AccountCreation {

  constructor() {
    this.mrRadioBtn = '#id_gender1';
    this.mrsRadioBtn = '#id_gender2';
    this.firstNameTextbox = '#customer_firstname';
    this.lastNameTextbox = '#customer_lastname';
    this.emailTextbox = '#email';
    this.passwordTextbox = '#passwd';
    this.daysSelect = '#days';
    this.monthsSelect = '#months';
    this.yearsSelect = '#years';
    this.addressTextbox = '#address1';
    this.cityTextbox = '#city';
    this.stateSelect = '#id_state';
    this.postalCodeTextbox = '#postcode';
    this.countrySelect = '#id_country';
    this.mobileTextbox = '#phone_mobile';
    this.mobileTextbox = '#phone_mobile';
    this.registerBtn = '#submitAccount';

    // cy.get(this.emailTextbox).as('emailTextbox');

  }

  setMr() {
    cy.wait(10000)
    cy.get(this.mrRadioBtn).click().debug()
  }

  setFirstName(value) {
    cy.wait(5000)

    cy.get(this.firstNameTextbox).type(value)
  }

  setLastName(value) {
    // cy.wait(5000)

    cy.get(this.lastNameTextbox).type(value)
  }

  validateEmail(value) {
    cy.wait(5000)

    cy.get(this.emailTextbox).should('have.text', value)
  }

  setPassword(value) {
    cy.get(this.passwordTextbox).type(value)
  }

  selectDay(value) {
    cy.get(this.daysSelect).select(value)
  }



  clickRegister() {
    cy.get(this.registerBtn).click();
  }
}
