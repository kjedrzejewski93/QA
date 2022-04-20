/// <reference types="cypress"/>

describe('RadioButtonAndCheckbox', () =>{
    it('First try', ()=>{

        cy.visit('https://www.stypendiadladziewczyn.pl/pl/studentka')

        cy.wait(2000)



        cy.get('[type="radio"]')
            .last()
            .click({force:true})

        cy.get('[type="checkbox"]')
            .eq(1)
            .click({force:true})
        
        

        


    })

})


