/// <reference types="cypress"/>

describe('my tests', function(){
   

})

/* ==== Test Created with Cypress Studio ==== */
it('CompDB', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://computer-database.gatling.io/computers');
  cy.get('#add').click();
  cy.get('#company').select('14');
  cy.get('.primary').click();
  /* ==== End Cypress Studio ==== */
});