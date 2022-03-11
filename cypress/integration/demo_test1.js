

describe('demo tests', function(){

    
/* ==== Test Created with Cypress Studio ==== */
it('Demo_Test_1', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://trytestingthis.netlify.app/');
    cy.get('#fname').clear();
    cy.get('#fname').type('Raghav');
    cy.get('#lname').clear();
    cy.get('#lname').type('Pal');
    /* ==== End Cypress Studio ==== */
  });

})
