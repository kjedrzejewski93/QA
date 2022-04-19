/// <reference types="cypress"/>

describe('wejście do sklepu',()=>{

    it('chodzenie po nim', ()=>{ 

        /// wejście na strone
        cy.visit("https://forum.coffee/")


        cy.get('[href="/sklep"][class="preFade fadeIn"]')
            .eq(0)
            .click()

        cy.get('[href="/sklep/p/tshirt"][class="grid-item-link"]')
            .click()

        cy.get('[class="ProductItem-gallery-thumbnails-item-image"][alt="Forumy-0154.jpg"]')
            .click()

        cy.get('select[aria-label="Select Size"]')
            .select('M')

        cy.get('input[aria-label="Quantity"]')
            .clear()
            .type('40')

        cy.get('[href="/regulamin"]')
            .click()
        
        cy.get('[href="/blog"]')
            .eq(0)
            .click()
        
        cy.get('img[alt="Subskrypcja #1.2022"]')
            .click()
        
        cy.get('svg[class="caret-right-icon--small"][viewBox="0 0 9 16"]')
            .click()

        cy.get('svg[class="caret-right-icon--small"]')
            .click()
        
        cy.get('[alt="Sklep Forum"]')
            .eq(0)
            .click()

        /// cy.contains('Torby')

        cy.get('[class="icon icon--cart"]')
            .eq(1)
            .click()
        
        cy.get('button[aria-label="Continue Shopping"]')
            .click()
        
        cy.get('a[href="/sklep/p/czarka-split"][aria-label="Czarka Split"][class="grid-item-link"]')
            .click()
        
        cy.get('input[aria-label="Quantity"]')
            .clear()
            .type('30')

        cy.get('[class="sqs-add-to-cart-button-inner"]')
            .click()

        cy.get('div[role="button"][class="confirmation-button no-frame confirm"]')
            .click()

        cy.get('input[aria-label="Quantity"]')
            .clear()
            .type('3')

        cy.get('div[class="sqs-add-to-cart-button-inner"][style="transition: opacity 0.2s ease-out 0s, visibility 0.2s ease-out 0s, transform 0.2s ease-out 0s; opacity: 1; visibility: visible; transform: scale(1);"]')

        cy.contains('Kontakt')
            .click()

        cy.get('img[alt="Sklep Forum"]')
            .eq(2)
            .click()
    })  
})