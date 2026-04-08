Feature: Checkout

  Scenario: User can complete the checkout process
    Given User open the Login page
    When User enter username "standard_user" and password "secret_sauce"
    And User click the login button
    Then User should be redirected to the Products page
    
    When User sort products by "Name (Z to A)"
    And User add product number 1 from the product list to the cart
    Then User should see "1" in the cart badge
    
    When User sort products by "Price (low to high)"
    And User add product number 1 from the product list to the cart
    Then User should see "2" in the cart badge
    
    When User click the cart icon
    Then User should be redirected to the Cart: "Your Cart" page
    And User should see 2 products in the cart
    And User should see selected products in the cart

    When User click the checkout button
    Then User should be redirected to the "Checkout: Your Information" page
    
    When User enter first name "John", last name "Doe" and postal code "12345"
    And User click the continue button
    Then User should be redirected to the "Checkout: Overview" page
    And User should see 2 products in the cart
    And User should see selected products in the cart 
    And User should see payment information "SauceCard #31337"
    And User should see shipping information "Free Pony Express Delivery!"
    And User should see correct item price, tax > 0 and correct total
    
    When User click the finish button
    Then User should be redirected to the "Checkout: Complete!" page
    And User shouldn't see the cart badge quantity
    
    When User click the back home button
    Then User should be redirected to the Products page