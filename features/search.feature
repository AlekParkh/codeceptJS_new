Feature: Search Functionality

  Scenario: "Search" returns correct data
    Given User opens the search page
    When User enters some value to the search input
    Then User can see "Search" returns with correct data

  Scenario: "Search" with empty value returns error
    Given User opens the search page
    When User try to search with empty value
    Then User see the error alert
