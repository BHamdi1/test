// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@shelex/cypress-allure-plugin'


require('cypress-commands')
require('@shelex/cypress-allure-plugin')
const path = require('path')
const fs = require('fs');
// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})


Cypress.config('testExecIssueKey', null); // Déclaration initiale avec une valeur par défaut

Cypress.Commands.add('setTestExecIssueKey', (value) => {
  Cypress.config('testExecIssueKey', value);
});


Cypress.on('before:browser:launch', (browser, options) => {
  cy.log("Before Tests launch")
})


before(() => {

})

after(() => {

})



