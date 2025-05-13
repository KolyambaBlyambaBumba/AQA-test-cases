Feature: Change Language Test

Scenario: Change Language
    Given I am on Wikipedia.org homepage
    When I switch the language to Spanish
    * I input 'Gabriel García Márquez' in the search field
    * I click the search button
    Then I should link to search results page