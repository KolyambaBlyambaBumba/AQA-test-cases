Feature: Login

  Scenario: Successful login with valid credentials
    Given User open the Login page
    When User enter username "standard_user" and password "secret_sauce"
    And User click the login button
    Then User should be redirected to the Products page

  Scenario: Unsuccessful login with locked out user
    Given User open the Login page
    When User enter username "locked_out_user" and password "secret_sauce"
    And User click the login button
    Then User should see an error message "Epic sadface: Sorry, this user has been locked out."

  Scenario: Unsuccessful login with invalid credentials
    Given User open the Login page
    When User enter username "invalid_user" and password "invalid_password"
    And User click the login button
    Then User should see an error message "Epic sadface: Username and password do not match any user in this service"
