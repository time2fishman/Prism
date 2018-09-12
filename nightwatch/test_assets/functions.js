const selectors = require('./selectors')

module.exports = {

    // Signs you into Marketstar Prism
    mksSignInFunc: function (browser) {
        browser
            .useXpath()
            .verify.visible(selectors.accountPage.mkstxt, 3000)
            .click(selectors.accountPage.mkstxt)
            .useCss()
            .waitForElementVisible(selectors.signInPage.mks.userNameInput, 3000)
            .setValue(selectors.signInPage.mks.userNameInput, '')
            .setValue(selectors.signInPage.mks.passwordInput, '')
            .click(selectors.signInPage.mks.signInButton)
            .waitForElementVisible(selectors.header.employeeSearch, 3000)
    },

    /* Gets you to the Employee Search page by clicking on the Employee Search tab in the
    header. Employee name must be entered and Search button must be clicked after to complete a search
    */
    employeeSearchFunc: function (browser) {
        browser
            .verify.visible(selectors.header.employeeSearch, 3000)
            .click(selectors.header.employeeSearch)
            .waitForElementVisible(selectors.employeeSearchPage.searchField, 3000)
    },

    /*Searches for the employee in quotes. Ends on Employee info page. Just need to change the name data to view different employees.*/
    employeeInfoPageFunc: function (browser) {
        browser
            .useCss()
            .verify.visible(selectors.header.employeeSearch, 5000)
            .click(selectors.header.employeeSearch)
            .waitForElementVisible(selectors.employeeSearchPage.searchField, 3000)
            .setValue(selectors.employeeSearchPage.searchField, 'Smart')
            .click(selectors.employeeSearchPage.searchButton)
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')
            .click(selectors.employeeSearchPage.cameronSmartNameLink)
            .useXpath()
            .waitForElementVisible(selectors.employeePage.employeeNameTitle, 3000)
            .verify.containsText(selectors.employeePage.employeeNameTitle, 'Employee – Cam Smart')
            .verify.containsText(selectors.employeePage.nameField, 'Cam Smart')
    },

    //Tests the Assign Workspace button and page load
    assignWorkspaceFunc: function (browser) {
        browser
            .useCss()
            .verify.visible(selectors.globals.assignWorkspaceButton)
            .click(selectors.globals.assignWorkspaceButton)
            .waitForElementVisible(selectors.assignWorkspacePage.newWorkspaceLabel, 3000)
            .verify.containsText(selectors.assignWorkspacePage.newWorkspaceLabel, '')
            .verify.containsText(selectors.assignWorkspacePage.currentWorkspaceField, 'OGD-HQ-2-C036')
    }

}