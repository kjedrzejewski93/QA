/// <reference types="cypress"/>

describe('RadioButtonAndCheckbox', () =>{
    it('First try', ()=>{
        // cy.visit('https://formularze.uniqa.pl/UniqaForms/formularz-kontaktowy')
        cy.visit('https://www.stypendiadladziewczyn.pl/pl/studentka')

        cy.wait(2000)



        cy.get('[type="radio"]').last().click({force:true})

        cy.get('[type="checkbox"]')
            .first()
            .click({force:true})
        

        


    })

})


