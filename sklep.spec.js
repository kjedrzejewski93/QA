/// <reference types="cypress"/>

describe('example', ()=>{
    it('chodzenie po sklepie',() =>{
        cy.visit("https://e-kaskada.pl/")

        //wejście na konto
        cy.contains('Szukaj').click()

        cy.get('#sea')
            .type('Spodnie')
            .type('{enter}')

        cy.get('[class="product_link"]')
            .eq(1)
            .click()
            .wait(3000)
        
        cy.get('h1[itemprop="name"]')
            .should('be.visible')
    })
})