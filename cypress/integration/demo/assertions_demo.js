/// <reference types="cypress"/>


it('assertions tests', function () {

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
    // .should('be.disabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')

    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')

    // explicit assertions

    expect(true).to.be.true

    let name = 'Automation'
    expect(name).to.be.equal('Automation')

    //assert
    assert.equal('5',5,'NOT equal')
    assert.strictEqual('5',5,'NOT equal')

});     