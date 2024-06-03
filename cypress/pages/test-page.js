const INPUT1_FIELD = "#input_text1";
const INPUT2_FIELD = "#input_text2";
const INPUT3_FIELD = "#input_text3";
const INPUT4_FIELD = "#input_text4";
const OVERLAY_CLOSE_BUTTON = "#overlay > button"
export default {

    gotToPage(pageUrl) {
        cy.visit(pageUrl)
    },

    clickOnButton(buttonId) {
        cy.get(buttonId).click({force:true})
    },

    doubleClickOnButton(buttonId) {
        cy.get(buttonId).dblclick({force:true})
    },

    isClickDoneMessageDisplayed(messageID) {
        return cy.get(messageID).should('be.visible')
    },

    moveMouseOver(buttonId) {
        cy.get(buttonId).trigger('mouseover')
    },

    insertValueOnInput1Field() {
        cy.get(INPUT1_FIELD).type("TOTO")
    },

    isFieldsHavingSameValue() {
        cy.get("body").then($body => {
            if ($body.find(OVERLAY_CLOSE_BUTTON).length > 0) {
                if (OVERLAY_CLOSE_BUTTON.is(':visible')){
                     cy.get(OVERLAY_CLOSE_BUTTON).click()
                }
            }
        });
        return (cy.get(INPUT2_FIELD).should('have.value', 'TOTO') && cy.get(INPUT3_FIELD).should('have.value', 'TOTO') &
        cy.get(INPUT4_FIELD).should('have.value', 'TOTO'))
    },

    isAllFieldsEmpty() {
        cy.get("body").then($body => {
            if ($body.find(OVERLAY_CLOSE_BUTTON).length > 0) {
                if (OVERLAY_CLOSE_BUTTON.is(':visible')){
                     cy.get(OVERLAY_CLOSE_BUTTON).click()
                }
            }
        });
        return (cy.get(INPUT1_FIELD).should('have.value', '') && cy.get(INPUT2_FIELD).should('have.value', '') && cy.get(INPUT3_FIELD).should('have.value', '') &
        cy.get(INPUT4_FIELD).should('have.value', ''))
    },

};