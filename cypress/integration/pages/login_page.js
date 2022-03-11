export class LoginPage{

    username_textbox = '#uname'
    password_textbox = '#pwd'
    login_button = '[type="submit"]'

    navigate(){
        cy.visit('https://trytestingthis.netlify.app/')
    }
    enterUsername(usesrname){
        cy.get(this.username_textbox).type(usesrname)
    }
    enterPassword(password){
        cy.get(this.password_textbox).type(password)
    }
    clickLogin(){
        cy.get(this.login_button).click()
    }
}