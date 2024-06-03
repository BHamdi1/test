declare namespace Cypress {
    interface Chainable<Subject> {
        attach_file(prevSubject: any, input: any, fileName: any, fileType: any): Chainable<any>
        dropFile(prevSubject: any, fileName: any): Chainable<any>
        setTestExecIssueKey(value: any): Chainable<any>
  }
}