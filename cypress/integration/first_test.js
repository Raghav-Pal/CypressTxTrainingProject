/// <reference types="cypress"/>

it.skip("Google search", function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf', {timeout:6000}).type('automation{enter}')
    cy.contains('Videos').click()
    cy.wait(3000)
    cy.get('.GOE98c').click()
    cy.contains('Flights').click()

})

it("Login test", function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()
    cy.contains('Login Successful :)')
})
