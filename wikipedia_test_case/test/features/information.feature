Feature: Check Information Test

Scenario: Check Information
    Given I am on Wikipedia.org homepage
    When I input 'Bengal tiger' in the search field
    And I click the search button
    Then I should link to search results page
    When I click the tools button
    And I click the page information link
    Then I should link to information page