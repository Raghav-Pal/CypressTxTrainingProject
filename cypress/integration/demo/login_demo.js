import {LoginPage} from "./pages/LoginPage"

const loginPage = new LoginPage()

beforeEach(function(){
    cy.log('I am outside describe')
})

describe('All Login Tests', function(){

    beforeEach(function(){
        loginPage.navigate('https://trytestingthis.netlify.app/')
    })
    
it('Login Test Valid credentials', function(){

    //loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
    cy.clickLink('here')
})

it
('Login Test Invalid username', function(){

    // loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test123')
    loginPage.enterPassword('test')
    loginPage.clickLogin()
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })
})

it('Login Test Invalid password', function(){

    loginPage.navigate('https://trytestingthis.netlify.app/')
    loginPage.enterUsername('test')
    loginPage.enterPassword('test123')
    loginPage.clickLogin()
    cy.on('window:alert', (txt) =>{
        expect(txt).to.be.equal('Wrong Credentials! Try again!')
    })
})

})