/// <reference types="cypress" />

context('Assertions', () => {
    beforeEach(() => {
        cy.visit('https://duka.com/pl/')
        cy.getCookies()
    })


    it('jacket', () => {
        cy.get('button[class="button_button--lgX0P details_save--1ja7w "]')
            .click()
        cy.get('[class="wf-menu is-icon"]')
            .click()

        cy.get('[placeholder="Szukaj na DUKA"]')
            .click()
            .type('kurtki')
        cy.get('[class="c-search_submitIcon wf-search"]')
            .click()
        cy.get('[class="a-typo is-text"]')
            .should('contain', 'Nie znaleziono produktów pasujących do podanej frazy: kurtki')

    })

    it('juice', () => {

        cy.get('button[class="button_button--lgX0P details_save--1ja7w "]')
            .click()


        cy.get('[class="wf-menu is-icon"]')
            .click()
            
        cy.get('[for="menu-label917"]')
            .click()
        cy.get('[for="menu-label917"]')
            .should('contain', 'PRODUKTY')
        cy.contains('.c-menu_item', 'AGD')
            .click()
        cy.get('[data-event-action="Wyciskarki do soków"]')
            .should('contain', 'Wyciskarki do soków')
            .click()
    })
    it('inspiration', () => {

        cy.get('button[class="button_button--lgX0P details_save--1ja7w "]')
            .click()


        cy.get('[class="wf-menu is-icon"]')
            .click()
        cy.get('[data-event-action="INSPIRACJE"]')
            .click()
        cy.get('[class="c-headline_title a-typo is-primary"]')
            .should('contain', 'Nowości & Inspiracje')
        cy.get('[alt="Odkryj nasze przepisy na skandynawskie święto Midsommar"]')
            .click()
        cy.scrollTo(0, 0)
        cy.get('.c-headline')
            .should('contain', 'Odkryj nasze przepisy na skandynawskie święto Midsommar')
    })

    it('sale', () => {

        cy.get('button[class="button_button--lgX0P details_save--1ja7w "]')
            .click()
        cy.get('[class="wf-menu is-icon"]')
            .click()
        cy.get('[data-event-action="SALE"]')
            .click()
        cy.get('.c-headline')
            .should('contain', 'Produkty w ofercie wyprzedażowej')
        cy.get('[data-label="Filtruj"]')
            .click()
        cy.get('[class="a-typo is-tertiary"]')
            .should('contain', 'Filtry')



        cy.get('[class="c-accordion_content"]').find('[type="checkbox"]').then(checkBox => {
            cy.wrap(checkBox)
                .eq(5)
                .click({ force: true })
            cy.wrap(checkBox)
                .eq(8)
                .click({ force: true })
            cy.wrap(checkBox)
                .eq(3)
                .should('not.be.checked')
                .click({ force: true })
                .should('be.checked')

        })
        cy.get('[placeholder="Od"]').clear().type('30')
        cy.get('[placeholder="Do"]').clear().type('70{enter}')

        cy.get('[class="c-headline_title a-typo is-secondary"]')
            .should('contain', 'Produkty w ofercie wyprzedażowej')
    })

})