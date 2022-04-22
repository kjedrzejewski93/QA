/// <reference types="cypress"/>

describe('SmartCityForum',()=>{


    it('Krok 1', ()=>{ 
        let website = "https://forumbranzowe.com/"

        /// wejście na strone
        cy.visit(website)

        cy.contains("Oferty pracy")
            .click()

        cy.get('[id="dolnoslaskie"]')
            .click({force:true})

        cy.get('[id="zachodniopomorskie"]')
            .click({force:true})
        cy.get('[id="zachodniopomorskie"]')
            .uncheck({force:true})
    })
})
