/// <reference types="cypress" />
import AuthenticationPage from '../../pages/authentication/authentication.page'
import AccountCreation from '../../pages/authentication/accountCreation.page'
import MyAccountPage from '../../pages/myAccount.page'

context('Cypress Training', () => {

  const authentication = new AuthenticationPage()
  const createPage = new AccountCreation()
  const myAccount = new MyAccountPage()

  beforeEach(() => {
    cy.visit('index.php?controller=authentication&back=my-account')
  })

  it('Register user', () => {
    const email = 'test@test.test.test';
    // form 1
    // cy.get('#email_create').type(email)
    // cy.get('#SubmitCreate').click();

    // // form 2
    // cy.wait(3000)
    // cy.get('#id_gender1').click()

    authentication.setEmail(email)
    authentication.validateEmailOk()
    authentication.clickSubmit()

    createPage.setMr();
    createPage.setFirstName("test");
    createPage.setLastName('test');
    createPage.validateEmail(email)
    createPage.setPassword('control123')
    createPage.selectDay(1);
  })

  it.only('Login user', () => {
    const email = 'user1@test.com.bo';
    
    authentication.setLoginEmail(email)
    authentication.setPassword('Control123')
    authentication.clickSignIn()

    myAccount.validateTitle("MY ACCOUNT")
  })


})





// cy.get('#customer_firstname').type(value)
// cy.get('#customer_lastname').type(value)
// cy.get('#passwd').type(value)

