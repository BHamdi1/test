Feature: Test cypress

    @scenario1
    Scenario: Click Done
        Given I navigate to the page: "https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html"
        When I click on the button "Button Click"
        Then I must see that the message "Click Done" is displayed

    @scenario2
    Scenario: DblClick Done
        Given I navigate to the page: "https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html"
        When I double click on the button "Button DblClick"
        Then I must see that the message "DblClick Done" is displayed

    @scenario3
    Scenario: MouseOver Done
        Given I navigate to the page: "https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html"
        When I move the mouse over the button "Button MouseOver"
        Then I must see that the message "MouseOver Done" is displayed

    @scenario4
    Scenario: Clear All
        Given I navigate to the page: "https://testingwithclarity.com/ClarityTestPage/ClarityTestPage.html?withOverlay"
        When I Insert a value in the Input 1 text field
        And I click on the button "Propagate"
        Then I can see that all other 3 input fields contain the same value inserted initially
        When I click on the button "Clear All"
        Then I can see that all the 4 input fields are empty