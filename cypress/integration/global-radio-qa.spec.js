describe('QA tests', ()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

    afterEach(function () {
        cy.end();
    })

    it('should be able to login with valid credentials', ()=>{
        let username = 'standard_user'
        let password = 'secret_sauce'
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        // check user logged In
        cy.get('.header_secondary_container').should('contain', 'Products')
    })
    it('cannot login with locked credentials', ()=>{
        let username = 'locked_out_user'
        let password = 'secret_sauce'
        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        // check user not able to logged in, check error message
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
    })
})
