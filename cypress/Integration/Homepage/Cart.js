describe('Test the Search functionality', () => {
    
    it('should search for a product and display results', () => {
        cy.visit("https://tutorialsninja.com/demo/")
        
        
        // Assertion of the URl
        cy.url().should('include','https://tutorialsninja.com/demo/')
       





    // Type 'iphone' into the search input
    cy.get('input[name="search"]').wait(2000).type("iphone");

    // Click the search button
    cy.get('.input-group-btn > .btn > .fa').wait(2000).click();

   // open the product page

   cy.get('img[src="https://tutorialsninja.com/demo/image/cache/catalog/demo/iphone_1-228x228.jpg"]').wait(2000).click();

   // click on the add to cart

   cy.get('button[id="button-cart"]').wait(2000).click()

   // check the cart items

   cy.get('#button-cart').wait(2000).click();
   //click on the cart container
   cy.get('.btn-inverse').wait(2000).click();
   //click on the checkout
   cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').wait(2000).click();

    });


        


  
    


});