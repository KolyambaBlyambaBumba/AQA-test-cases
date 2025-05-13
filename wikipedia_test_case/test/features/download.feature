Feature: Download PDF File Test

Scenario: Download PDF File
    Given I am on Wikipedia.org homepage
    When I input 'Albert Einstein' in the search field
    And I click the search button
    Then I should link to search results page
    When I click the tools button
    And I click the download as PDF link
    Then I should link to download PDF page
    When I get file name
    And I click the download button
    Then I should download the PDF file