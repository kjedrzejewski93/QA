/// <reference types="cypress"/>

describe('google', () =>{

    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      
      afterEach(() => {
        cy.saveLocalStorage();
      });

      
    it('Strona główna', ()=>{
        cy.visit('https://forum.coffee/')


        cy.get('h2[class="preFade fadeIn"]')
            .wait(2000)
            // .children
            .should('be.visible')


    })

    it('Sklep', ()=>{
        cy.visit('https://forum.coffee/sklep')

        cy.wait(2000)

        cy.get('[class="nested-category-title nested-category-title-padding preFade fadeIn"]')
            .should('contain', 'Sklep')

        cy.get('[class="grid-item-link"]')
            .eq(2)
            .click()

        cy.get('h3[class="preFade fadeIn"]')
            .should('be.visible')
    })


    it('Blog', ()=>{
        cy.visit('https://forum.coffee/blog')

        cy.contains('Subskrypcja #2.2022')
            .click()

        cy.get('h1[class="entry-title entry-title--large p-name preFade fadeIn"]')
            .should('contain', 'Subskrypcja #2.2022')

        cy.get('svg[class="caret-right-icon--small"]')
            .click()
            .wait(2000)

        cy.get('h1[class="entry-title entry-title--large p-name preFade fadeIn"]')
            .should('contain', 'Subskrypcja #1.2022')
    })

    it('Kontakt', ()=>{
        cy.visit('https://forum.coffee/kontakt')

        cy.get('h2[class="preFade fadeIn"]')
            .should('contain', "Napisz do nas")

        cy.get('[x-autocompletetype="given-name"]')
            .type('Jan')
        cy.get('[x-autocompletetype="surname"]')
            .type('Testowy')
        cy.get('[autocomplete="email"]')
            .type('test@test.pl')
        cy.get('[id="textarea-yui_3_17_2_1_1553888888520_3747-field"]')
            .type('Testujemy treść wiadomości')
        cy.get('[class="button sqs-system-button sqs-editable-button sqs-button-element--primary"]')
            .should('be.visible')

    })

    it('T-shirt', ()=>{
        cy.visit('https://forum.coffee/sklep')
            
        cy.get('[class="grid-item-link"]')
            .eq(1)
            .click()

        cy.get('select[aria-label="Select Size"]')
            .select('L')
    })

    it.only('Zakupy', ()=>{
        cy.visit('https://forum.coffee/sklep')

        cy.get('[class="grid-item-link"]')
            .eq(6)
            .click()

        cy.get('h1[class="ProductItem-details-title preFade fadeIn"]')
            .should('contain', 'AeroPress - filtry')

        cy.get('input[aria-label="Quantity"]')
            .clear()
            .type('152')
           
        cy.get('[class="sqs-add-to-cart-button sqs-suppress-edit-mode sqs-button-element--primary"]')
            .click()
            .wait(2000)

        cy.get('div[class="title"]')
            .should('contain', 'Unable to Purchase Item')

        cy.get('div[role="button"][class="confirmation-button no-frame confirm"]')
            .click()

        cy.get('input[aria-label="Quantity"]')
            .clear()
            .type('2')

        cy.get('[class="sqs-add-to-cart-button sqs-suppress-edit-mode sqs-button-element--primary"]')
            .click()
            .wait(2000)

        cy.visit('https://forum.coffee/cart')
    })

    it('Login',() =>{
        cy.visit('https://forum.coffee/')
        

        // cy.get('div[class="user-accounts-link header-nav-item header-nav-item--collection customerAccountLoginDesktop preFade fadeIn loaded"][data-controller="UserAccountLink"]')
        //     .eq(0)
        //     .click()
        cy.contains('Login')
            .click()

        cy.get('iframe[id="accountFrame"]')
            
    })
})