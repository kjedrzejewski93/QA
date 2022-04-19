/// <reference types="cypress"/>

describe('wejście do sklepu', ()=>{
    it('chodzenie po nim', ()=>{

        //wejście na strone
        cy.visit("https://e-kaskada.pl/")

        //szukanie po sklepie
        cy.contains('Szukaj')
            .click()

        cy.get('#sea')
            .type('Spodnie')
            .type('{enter}')

        cy.get('[class="mask col valign_bottom "]')
            .eq(1)
            .click()

        cy.get('h1[itemprop="name"]')
            .should('be.visible')

        cy.get('.img-responsive')
            .eq(0)
            .click()
    })
})