describe('Login ', () => {
    it('', () => {
        cy.visit("https://tutorialsninja.com/demo/")  
         
        cy.get('[title="My Account"]').click();

        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=account/login"]').click();
          

        cy.get('input[name="email"]').type('rajitgautam2002@gmail.com');
        // Assertion for username fields
        cy.get('input[name="email"]').should('have.value','rajitgautam2002@gmail.com');


        cy.get('input[name="password"]').type('rajit@4966');
        // Assertion for password fields
        cy.get('input[name="password"]').should('have.value','rajit@4966');

        cy.get('input[type="submit"]').click()
     
    });
});