/// <reference types="Cypress" />

export default class MyAccountPage {

  constructor() {
    this._titleText = 'h1.page-heading';
  }

  validateTitle(value) {
    cy.get(this._titleText).invoke('text').then(text => {
      expect(text.toLowerCase()).to.equals(value.toLowerCase())
    })

    return this;
  }
}
