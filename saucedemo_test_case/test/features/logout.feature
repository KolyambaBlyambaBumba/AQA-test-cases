Feature: Logout

  Scenario: User cannot return to Products page after logout using browser back button
    Given User open the Login page
    When User enter username "standard_user" and password "secret_sauce"
    And User click the login button
    Then User should be redirected to the Products page

    When User click the menu button
    And User click the logout button
    Then User should be redirected to the Login page

    When User click the browser back button
    Then User should see an error message "Epic sadface: You can only access '/inventory.html' when you are logged in."