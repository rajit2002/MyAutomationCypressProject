describe('Test the Search functionality', () => {
    
    it('should search for a product and display results', () => {
        cy.visit("https://tutorialsninja.com/demo/")  
       // title for the search page

    //   cy.title().should('include' ,'Search');


    // Type 'iphone' into the search input
    cy.get('input[name="search"]').type("iphone");

    // Click the search button
   cy.get('button[class="btn btn-default btn-lg"]').click();

   // open the product page

   cy.get('img[src="https://tutorialsninja.com/demo/image/cache/catalog/demo/iphone_1-228x228.jpg"]').click();
     // alert for successfully adding product to the cart  


     cy.get('#button-cart').click();

 



    });
});