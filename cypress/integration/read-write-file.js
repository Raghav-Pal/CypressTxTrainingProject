/// <reference types="cypress"/>

beforeEach(function(){
    cy.fixture('example.json').as('data')
})

it('Read File using Fixture', function(){

    cy.fixture('example.json')
    cy.fixture('example.json').its('name').should('eq','cypress')
    cy.log(this.data.name)
    cy.log(this.data.email)
})

it('Read File using readFile()', function(){

    cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq','cypress')
    cy.log(this.data.name)
    cy.log(this.data.email)
})

it('Write file using writeFile()', function(){

    cy.writeFile('sample.txt', 'Hello from cypress')
    cy.writeFile('sample.txt', '\nHello Again! from cypress', {flag: 'a+'})

    cy.SayHello()

})