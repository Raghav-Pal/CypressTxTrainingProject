/// <reference types="cypress"/>

describe('my tests', function(){
    it.skip('first test', function(){
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#fname').clear();
        cy.get('#fname').type('Raghav');
        cy.get('#lname').clear();
        cy.get('#lname').type('Pal');
        /* ==== End Cypress Studio ==== */
    })

    /* ==== Test Created with Cypress Studio ==== */
    it.skip('Google Search', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://www.google.com/');
        cy.get('.gLFyf').clear();
        cy.get('.gLFyf').type('automation{enter}');
        cy.get('.CqAVzb > center > .gNO89b').click();
        cy.get('.MUFPAc > :nth-child(5) > a').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it.skip('SubmitForm', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#fname').clear();
        cy.get('#fname').type('Raghav');
        cy.get('#lname').clear();
        cy.get('#lname').type('Pal');
        cy.get('#male').check();
        cy.get('#option').select('option 1');
        cy.get('#owc').select(['option 1']);
        cy.get('#owc').select(['option 1', 'option 2']);
        cy.get('#owc').select(['option 1', 'option 2', 'option 3']);
        cy.get('[name="option1"]').check();
        cy.get('[name="option2"]').check();
        cy.get('[name="option3"]').check();
        cy.get('[list="datalists"]').clear();
        cy.get('[list="datalists"]').type('Vanilla');
        cy.get('#favcolor').click();
        cy.get('#day').click();
        cy.get('#day').click();
        cy.get('#a').click();
        cy.get('#myfile').click();
        cy.get('#quantity').clear();
        cy.get('#quantity').type('23');
        cy.get('textarea').click();
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it.skip('CalculatorAdd', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://juliemr.github.io/protractor-demo/');
        cy.get('[ng-model="first"]').click();
        cy.get('.form-inline > .ng-dirty').clear();
        cy.get('.form-inline > .ng-dirty').type('10');
        cy.get('.input-small.ng-pristine').click();
        cy.get('.ng-untouched').clear();
        cy.get('.ng-untouched').type('10');
        cy.get('#gobutton').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it.skip('CuraHealth', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').clear();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').clear();
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
        cy.get('#chk_hospotal_readmission').check();
        cy.get('#radio_program_medicaid').check();

        cy.get('#txt_visit_date').type('02/05/2022') 
        cy.get('#txt_visit_date').type('{esc}')
        // cy.get('input[id="txt_visit_date"]').invoke('val').then((text) => {
        //     expect('02/05/2022').to.equal(text);
        // });

        // cy.get('.glyphicon').click();
        // // cy.get(':nth-child(4) > :nth-child(3)').click();
        // cy.wait(2000)
        // cy.get(':nth-child(4) > :nth-child(3)').click();
        // cy.wait(2000)
        // cy.get(':nth-child(4) > :nth-child(3)').type('{enter}')
        // cy.get(':nth-child(4) > :nth-child(3)').click();
        // cy.get(':nth-child(4) > :nth-child(3){escape}')
        // cy.type('{enter}')
        cy.get('#txt_comment').click();
        cy.get('#txt_comment').type('ok ok ok')
        // cy.get('#txt_comment{enter}')
        cy.get('#btn-book-appointment').click();
        cy.get('h2').click();
        /* ==== End Cypress Studio ==== */
    });


})