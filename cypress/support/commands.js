// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@4tw/cypress-drag-drop'
import 'cypress-file-upload'
import 'cypress-wait-until'

require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add(
    'attach_file',
    {
      prevSubject: 'element',
    },
    (input, fileName, fileType) => {
      cy.fixture(fileName, 'base64')
      .then(content => Cypress.Blob.base64StringToBlob(content, fileType))
      .then(blob => {
        const testFile = new File([blob], fileName);
        const dataTransfer = new DataTransfer();
  
        dataTransfer.items.add(testFile);
        input[0].files = dataTransfer.files;
        return input;
      })
    }
  )
// Cypress.Commands.add('uploadFile', (fileName, fileType = ' ', selector) => {
//     return cy.get(selector).then(subject => {
//         cy.fixture(fileName, 'base64')
//             .then(Cypress.Blob.base64StringToBlob)
//             .then(blob => {
//                 const el = subject[0];
//                 const testFile = new File([blob], fileName, {
//                     type: fileType
//                 });
//                 const dataTransfer = new DataTransfer();
//                 dataTransfer.items.add(testFile);
//                 el.files = dataTransfer.files;
//             });
//     });
// });
Cypress.Commands.add(
    'dropFile', {
        prevSubject: false
    }, (fileName) => {
        Cypress.log({
            name: 'dropFile',
        })
        return cy
            .fixture(fileName, 'base64')
            .then(Cypress.Blob.base64StringToBlob)
            .then(blob => {
                // instantiate File from `application` window, not cypress window
                return cy.window().then(win => {
                    const file = new win.File([blob], fileName)
                    const dataTransfer = new win.DataTransfer()
                    dataTransfer.items.add(file)

                    return cy.document().trigger('drop', {
                        dataTransfer,
                    })
                })
            })
    }
)
