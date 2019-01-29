Feature: Google search

  @run
  Scenario Outline: Open all pages containing Adaptavist string
    Given I go to the following page "http://www.google.com"
    And I fill in "search input" on "main page" with the value <searchKey>
    When I press the key "Enter"
    Then I am able to open all links that contains the text <searchKey>
    Examples:
      | searchKey    |
      | "Adaptavist" |

  @run
  Scenario Outline: Check that search results does not contain Adaptavist string
    Given I go to the following page "http://www.google.com"
    And I fill in "search input" on "main page" with the value <searchKey>
    When I press the key "Enter"
    Then I can not see any search result containing the text "Adaptavist"
    Examples:
      | searchKey   |
      | "Atlassian" |