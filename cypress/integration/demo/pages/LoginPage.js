export class LoginPage{

    login_username = '#uname'
    login_password = '#pwd'
    loign_loginButton = '[type="submit"]'

    navigate(url){
        cy.visit(url)
    }
    enterUsername(username){
        cy.get(this.login_username).type(username) 
    }
    enterPassword(password){
        cy.get(this.login_password).type(password)
    }
    clickLogin(){
        cy.get(this.loign_loginButton).click()
    }
}