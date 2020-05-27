import { AuthenticationPage } from '../../pages'

context('Cypress Training', () => {

  it.only('Login user', () => {
    const email = 'user1@test.com.bo';

    AuthenticationPage
      .visit()
      .setLoginEmail(email)
      .setPassword('Control123')
      .clickSignIn()

      .myAccountPage()
      .validateTitle("MY ACCOUNT")
  })
})



// it('Register user', () => {
//   const email = 'test@test.test.test';
//   // form 1
//   // cy.get('#email_create').type(email)
//   // cy.get('#SubmitCreate').click();

//   // // form 2
//   // cy.wait(3000)
//   // cy.get('#id_gender1').click()

//   authentication.setEmail(email)
//   authentication.validateEmailOk()
//   authentication.clickCreateAnAccount()

//   createPage.setMr();
//   createPage.setFirstName("test");
//   createPage.setLastName('test');
//   createPage.validateEmail(email)
//   createPage.setPassword('control123')
//   createPage.selectDay(1);
// })

// cy.get('#customer_firstname').type(value)
// cy.get('#customer_lastname').type(value)
// cy.get('#passwd').type(value)

