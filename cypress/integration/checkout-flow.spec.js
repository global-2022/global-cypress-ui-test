describe('QA test checkout flow', () => {
    it('should be able to checkout successfully', () => {
        cy.visit("/")
        cy.title().should('eq', 'Swag Labs')
        cy.get('[data-test="username"]').should('be.visible')

        let username = 'standard_user'
        let password = 'secret_sauce'

        cy.get('[data-test="username"]').type(username)
        cy.get('[data-test="password"]').type(password)
        cy.get('[data-test="login-button"]').click()
        // check user logged In
        cy.get('.header_secondary_container')
            .should('contain', 'Products')

        //Sort the inventory page high to low price
        cy.get('[data-test="product_sort_container"]').should('be.visible')
            .select('hilo', {force: true})

        //Add 2nd high and low price item to cart
        cy.get('[data-test*="add-to-cart-sauce-labs-"]')
            .should('be.visible').eq(0).click()

        // Click on Cart after add item
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .should('have.text', "1")
            .click({force: true})

        // Click checkout option
        cy.get('#checkout').should('be.visible').click()

        // check out confirmation page
        cy.get('#first-name').should('be.visible').type('test')
        cy.get('#last-name').should('be.visible').type('test')
        cy.get('#postal-code').should('be.visible').type('EC2A 4PH')
        cy.get('#continue').should('be.visible').click()

        // CHECKOUT overview page
        cy.get('#finish').should('be.visible').click()

        // Complete order screen
        cy.get('.complete-header').should('be.visible')
            .should('have.text', 'THANK YOU FOR YOUR ORDER')
    });
})
