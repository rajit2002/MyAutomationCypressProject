describe('should display the navigation bar with correct links', () => {
     it('Test01', () => {
         cy.visit("https://tutorialsninja.com/demo/");
         
         // hover in the Desktops 
         cy.get('.nav > :nth-child(1) > .dropdown-toggle').wait(3000).realHover();
         
         // Verify that the hover triggered the dropdown menu correctly
         cy.get('.dropdown-menu').should('be.visible');
         
         // hover in the Laptop & mackbook
         cy.get('.nav > :nth-child(2) > .dropdown-toggle').wait(3000).realHover();
         
         // Verify that the hover triggered the dropdown menu correctly
         cy.get('.dropdown-menu').should('be.visible');


         // hover in the components
        cy.get(':nth-child(3) > .dropdown-toggle').wait(3000).realHover();
         
         // Verify that the hover triggered the dropdown menu correctly
         cy.get('.dropdown-menu').should('be.visible');


         // hover in the Tablets
         cy.get('.nav > :nth-child(4) > a').wait(3000).realHover();
         
          // hover in the software
          cy.get('.nav > :nth-child(5) > a').wait(3000).realHover();

          // hover in the Phones & PDAs
          cy.get(':nth-child(6) > a').wait(3000).realHover();
         
       
          // hover in the cameras
          cy.get(':nth-child(7) > a').realHover();

          // hover in the Mp3
          cy.get(':nth-child(8) > .dropdown-toggle').realHover();
         
       

     });
 });