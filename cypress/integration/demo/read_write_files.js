/// <reference types="cypress"/>
describe('Read Write Files', function(){

    beforeEach(function(){
        cy.fixture('example.json').as('data')
    })

    it('read files using fixture', function(){
        cy.fixture('example.json')
            .its('name').should('eq','cypress')
        cy.log(this.data.name)
    });
    it('read files using readFile()', function(){
        cy.readFile('./cypress/fixtures/example.json')
        .its('name').should('eq','cypress')

    });
    it('write file', function(){

        cy.writeFile('sample.txt', 'Hello World')
        cy.writeFile('sample.txt', '\nHi', {flag: 'a+'})

    });

})