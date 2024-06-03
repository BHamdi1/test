import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import TestPage from '../../../../pages/test-page.js';

Given('I navigate to the page: {string}', (pageUrl) => {
    TestPage.gotToPage(pageUrl)
});

When, And('I click on the button {string}', (buttonName) => {
    let BUTTON_ID = "";
    switch(buttonName){
        case "Button Click": 
            BUTTON_ID = '#buttonClick';
            break;
        case "Button DblClick": 
            BUTTON_ID = '#buttonDblClick';
            break;
        case "Propagate": 
            BUTTON_ID = '#propagate';
            break;
        case "Clear All": 
            BUTTON_ID = '[onclick="clearValue()"]';
            break;
    }
    TestPage.clickOnButton(BUTTON_ID)
});

When('I double click on the button {string}', (buttonName) => {
    let BUTTON_ID = "";
    switch(buttonName){
        case "Button Click": 
            BUTTON_ID = '#buttonClick';
            break;
    }
    BUTTON_ID = "#buttonDblClick"
    TestPage.doubleClickOnButton(BUTTON_ID)
});

When('I move the mouse over the button {string}', (buttonName) => {
    let BUTTON_ID = ""
    switch(buttonName){
        case "Button MouseOver": 
            BUTTON_ID = '#buttonMouseOver';
            break;
    }
    TestPage.moveMouseOver(BUTTON_ID)
});

Then('I must see that the message {string} is displayed', (message) => {
    let MESSAGE_ID = "";
    switch(message){
        case "Click Done": 
            MESSAGE_ID = '#buttonClickMsg';
            break;
        case "DblClick Done": 
            MESSAGE_ID = '#buttonDblClickMsg';
            break;
        case "MouseOver Done":
            MESSAGE_ID = '#buttonMouseOverMsg';
            break;
    }
    TestPage.isClickDoneMessageDisplayed(MESSAGE_ID)
});

When('I Insert a value in the Input 1 text field', ()  => {
    TestPage.insertValueOnInput1Field()
});

Then('I can see that all other 3 input fields contain the same value inserted initially', ()  => {
    TestPage.isFieldsHavingSameValue()
});

Then('I can see that all the 4 input fields are empty', ()  => {
    TestPage.isAllFieldsEmpty()
});
