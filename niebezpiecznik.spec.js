/// <reference types="cypress"/>

describe('SEAP',()=>{

    it('Login', ()=>{ 

        // cy.getCookies()
        let website = "https://niebezpiecznik.pl/"

        /// wejście na strone
        cy.visit(website)

        cy.contains('5 PORAD')
            .click()

    })
})