/// <reference types="cypress"/>

describe('Niebezpiecznik',()=>{

    it('Przejście po stronie', ()=>{ 

        // cy.getCookies()
        let website = "https://niebezpiecznik.pl/"
        cy.viewport(1424, 868)
        /// wejście na strone
        cy.visit(website)

        //5 porad
        cy.contains('5 PORAD')
            .click()

        cy.contains('Zobacz niebezpiecznikowy wykład z TEDx')
            .should('be.visible')
        cy.contains('5 rad z wykładu')
            .should('contain', '5 rad z wykładu')

            //search
        cy.get('[id="searchinput"]')
            .clear()
            .type('Szafy')
            .type('{enter}')
        cy.get('[class="strong"]')
            .should('contain', 'Wyniki wyszukiwania dla zapytania: ')

            //audyt
        cy.get('[title="Audyty i testy penetracyjne"]')
            .click()
        cy.get('[name="your-name"]')
            .type('Ziomek')
        cy.get('[name="your-email"]')
            .type('test@test.eu')
        cy.get('[name="your-telephone"]')
            .type('123321123')
        cy.get('[name="your-company"]')
            .type('Ziomek SP. Z. o o')
        cy.get('select[name="budzet-26"]')
            .select('Do 20 000 PLN')
            .should('have.value', 'Do 20 000 PLN' )


        cy.get('[name="your-message"]')
            .type('Tekst wiadomości')

        cy.get('input[type="submit"]')
            .should('be.visible')

        //sklep
        cy.contains(' SKLEP ')
            .click()
        cy.get('h1[id="text01"]')
            .should('contain', 'Wybierz interesujący Cię produkt.')
        cy.get('ul')
            .should(($ul) =>{
                expect($ul).to.have.length(13)
                expect($ul.last()).to.contain('Długopis Bojowy')
            })


        cy.contains('Szkolenie przez internet:Bezpieczeństwo Sieci')
            .click()

        cy.get('span[class="cena"]')
            .should('contain', '3935zł')

        cy.contains('« wróć do listy wszystkich produktów')
            .click()

    })
})