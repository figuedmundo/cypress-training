/// <reference types="cypress" />
import { baseUrl } from '../../../cypress.json'
import Authentication from '../../pages/authentication.page'
import AccountCreation from '../../pages/accountCreation.page'

context('Login Page Testcases', () => {

  const authentication = new Authentication()
  const createPage = new AccountCreation()


  beforeEach(() => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  })

  it('Register user', () => {
    const email = 'test@test.test.test';
    // form 1
    cy.get('#email_create').type(email)
    cy.get('#SubmitCreate').click();

    // form 2
    cy.wait(3000)
    cy.get('#id_gender1').click()
  })
})


// cy.get('#customer_firstname').type(value)
// cy.get('#customer_lastname').type(value)
// cy.get('#passwd').type(value)


// authentication.setEmail(email)
// cy.wait(5000)

// authentication.validateEmailOk()
// authentication.clickSubmit().then( res => {

//   cy.url()
//   cy.log(res)

//   createPage.setMr();
//   createPage.setFirstName("test");
//   createPage.setLastName('test');
//   createPage.validateEmail(email)
//   createPage.setPassword('control123')
//   createPage.selectDay(1);

// })
