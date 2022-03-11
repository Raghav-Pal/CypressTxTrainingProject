/// <reference types="cypress"/>

import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage()

beforeEach(function(){
    cy.log(' I am outside Describe block')
})

describe('Login tests', function () {

    beforeEach(function(){
        loginPage.navigate()
    })

    it('Login with valid Credentials', function () {
        
        loginPage.enterUsername('test')
        loginPage.enterPassword('test')
        loginPage.clickLogin()
        cy.contains('Login Successful :)')
    })
    it.skip('Login with invalid username', function () {

        loginPage.enterUsername('test123')
        loginPage.enterPassword('test')
        loginPage.clickLogin()
        cy.contains('Login Successful :)')
    })
    it('Login with invalid password', function () {

        loginPage.enterUsername('test')
        loginPage.enterPassword('test456')
        loginPage.clickLogin()
        cy.contains('Login Successful :)')
    })

})




















     // cy.visit('https://trytestingthis.netlify.app/')
    // cy.get('#uname').type('test')
    // cy.get('#pwd').type('test')
    // cy.get('[type="submit"]').click()
    // cy.contains('Login Successful :)')