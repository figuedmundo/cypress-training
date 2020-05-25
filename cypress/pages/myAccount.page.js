/// <reference types="Cypress" />

export default class MyAccountPage {

  constructor() {
    this.titleText = 'h1.page-heading';
  }

  validateTitle(value) {
    cy.get(this.titleText).invoke('text').then(text => {
      expect(text.toLowerCase()).to.equals(value.toLowerCase())
    })
  }
}
