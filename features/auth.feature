Feature: autorization BDD

  Scenario: Successful authorization
    Given User opens the login page
    When User enters correct credentials
    Then The user is successfully authorized and redirected to the main page

  Scenario: Impossible autorization w/o password
    Given User opens the login page
    When User does not enter password
    Then Error message is displayed
