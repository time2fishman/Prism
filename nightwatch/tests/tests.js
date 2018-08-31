const selectors = require('../test_assets/selectors')
// const data = require('../test_assets/data')
const functions = require('../test_assets/functions')

module.exports = {

    beforeEach: browser => {
        browser.url('https://dev5.marketstar.com/PrismReview')
        browser.maximizeWindow()
    },

    after: browser => {
        browser.end()
    },

    'Marketstar Sign In': browser => {
        functions.mksSignInFunc(browser)
    },

    'Employee search full name': browser => {
        functions.employeeSearchFunc(browser)
        browser
            .setValue(selectors.employeeSearchPage.searchField, 'Cameron Smart')
            .click(selectors.employeeSearchPage.searchButton)
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')
    },

    'Employee search first name only': browser => {
        functions.employeeSearchFunc(browser)
        browser
            .setValue(selectors.employeeSearchPage.searchField, 'Cameron')
            .click(selectors.employeeSearchPage.searchButton)
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')
    },

    'Employee search preferred/partial name only': browser => {
        functions.employeeSearchFunc(browser)
        browser
            .setValue(selectors.employeeSearchPage.searchField, 'Cam')
            .click(selectors.employeeSearchPage.searchButton)
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')
    },

    'Employee search last name only': browser => {
        functions.employeeSearchFunc(browser)
        browser
            .setValue(selectors.employeeSearchPage.searchField, 'Smart')
            .click(selectors.employeeSearchPage.searchButton)
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')
    },

    'After an employee search; clicking the name link loads the employee page': browser => {
        functions.employeeInfoPageFunc(browser)
    },
}

//     //This test checks that all elements are present in the Company Selection page and that the text says what it should on each element.
//     'Account page UI check': browser => {
//         browser.url('https://dev5.marketstar.com/PrismReview')
//         browser
//             .maximizeWindow()
//             .verify.visible(selectors.accountPage.logo)
//             .verify.containsText(selectors.accountPage.signInWithWhichAccountText, 'Sign in with one of these accounts')
//             .verify.visible(selectors.accountPage.dasIcon)
//             .verify.visible(selectors.accountPage.mksIcon)
//             .verify.visible(selectors.accountPage.ccrIcon)
//             .verify.visible(selectors.accountPage.ccsIcon)
//             .verify.visible(selectors.accountPage.help)
//             .verify.containsText(selectors.accountPage.help, 'Help')
//             .useXpath()
//             .verify.containsText(selectors.accountPage.dasText, 'DAS Shared Services')
//             .verify.containsText(selectors.accountPage.mkstxt, 'MarketStar')
//             .verify.containsText(selectors.accountPage.ccrtxt, 'Creative Channel Retail')
//             .verify.containsText(selectors.accountPage.ccstxt, 'Creative Channel Services')
//             .useCss()
//     },
//     //This test checks that all elements are present on the MKS sign in page and that the text says what it should on each element. 
//     //It also signs you into Prism
//     'MKS Sign in check': browser => {

//         browser
//             .useCss()
//             .verify.visible(selectors.accountPage.logo)
//             .useXpath()
//             // .verify.containsText(selectors.signInPage.das.loginMessage, 'Sign in with your organizational account')
//             .click(selectors.accountPage.mkstxt)
//             .useCss()
//             .waitForElementVisible(selectors.signInPage.mks.userNameInput, 3000)
//             .expect.element(selectors.signInPage.mks.userNameInput).to.have.attribute('placeholder').equals('someone@example.com')
//         browser.expect.element(selectors.signInPage.mks.passwordInput).to.have.attribute('placeholder').equals('Password')
//         browser
//             .verify.visible(selectors.signInPage.mks.signInButton)
//             .verify.containsText(selectors.signInPage.mks.signInButton, 'Sign in')
//         browser
//             .setValue(selectors.signInPage.mks.userNameInput, '')
//             .setValue(selectors.signInPage.mks.passwordInput, '')
//             .click(selectors.signInPage.mks.signInButton)
//             .waitForElementVisible(selectors.internalJobTitlesPage.createNewButton, 3000)
//         // .verify.visible(selectors.internalJobTitlesPage.createNewButton)
//     },

//     //This test checks that all elements are present in the Header and that the text says what it should on each element.
//     'Header UI check': browser => {
//         browser
//             .verify.visible(selectors.header.prismLogo)
//             .useXpath()
//             .verify.visible(selectors.header.humanResources.humanResourcesDropDown)
//             .verify.containsText(selectors.header.humanResources.humanResourcesDropDown, 'Human Resources')
//             .click(selectors.header.humanResources.humanResourcesDropDown)
//             .useCss()
//             .verify.visible(selectors.header.humanResources.cancelHire)
//             .verify.containsText(selectors.header.humanResources.cancelHire, 'Cancel Hire')
//             .useXpath()
//             .verify.visible(selectors.header.humanResources.contactSearch)
//             .verify.containsText(selectors.header.humanResources.contactSearch, 'Contact Search')
//             .useCss()
//             .verify.visible(selectors.header.humanResources.internalJobTitles)
//             .verify.containsText(selectors.header.humanResources.internalJobTitles, 'Internal Job Titles')
//             .verify.visible(selectors.header.humanResources.jobGrades)
//             .verify.containsText(selectors.header.humanResources.jobGrades, 'Job Grades')
//             .verify.visible(selectors.header.humanResources.organizationLevels)
//             .verify.containsText(selectors.header.humanResources.organizationLevels, 'Organization Levels')
//             .verify.visible(selectors.header.humanResources.projectJobTitles)
//             .verify.containsText(selectors.header.humanResources.projectJobTitles, 'Project Job Titles')
//             .verify.visible(selectors.header.humanResources.roleSearch)
//             .verify.containsText(selectors.header.humanResources.roleSearch, 'Role Search')
//             .verify.visible(selectors.header.humanResources.suspensions)
//             .verify.containsText(selectors.header.humanResources.suspensions, 'Suspensions')
//             .verify.visible(selectors.header.humanResources.transferRequests)
//             .verify.containsText(selectors.header.humanResources.transferRequests, 'Transfer Requests')
//         //Need to add finance, tasks, emplyee search, administration, help, and name drop down
//     },

//     //Checks if the downline employees icon works while impersonating a manager
//     '3. Impersonation button and managers employees button check': browser => {
//         browser
//             .useCss()
//             .click(selectors.header.administrationTab)
//             .useXpath()
//             .waitForElementVisible(selectors.administrationPage.administrationTitle, 3000)
//             .verify.containsText(selectors.administrationPage.administrationTitle, 'Administration')
//             .useCss()
//             .clickByText(selectors.administrationPage.contactSearch, 'Contact Search')
//             .pause(500)
//             .useXpath()
//             .verify.containsText(selectors.contactSearchPage.contactSearchTitle, 'Contact Search')
//             .useCss()
//             .setValue(selectors.contactSearchPage.searchField, 'Russ Reed')
//             .click(selectors.contactSearchPage.searchButton)
//             .useXpath()
//             .waitForElementVisible(selectors.contactSearchPage.impersonateButton, 3000)
//             .click(selectors.contactSearchPage.impersonateButton)
//             .pause(500)
//             .verify.containsText(selectors.employeesIManagePage.managersNameEmployeesTitle, 'Russ Reed\'s Employees')
//             .verify.containsText(selectors.employeesIManagePage.pageBody, 'Diane Graybeal')
//             .useCss()
//             .clickByText(selectors.employeesIManagePage.dianeGraybeal, 'Diane Graybeal')
//             .useXpath()
//             .waitForElementVisible(selectors.employeePage.nameField, 3000)
//             .verify.containsText(selectors.employeePage.nameField, 'Diane Graybeal')
//             .useCss()
//             .click(selectors.employeesIManagePage.dGraybealsEmployeesButton)
//             .useXpath()
//             .waitForElementVisible(selectors.employeesIManagePage.managersNameEmployeesTitle, 3000)
//             .verify.visible(selectors.employeesIManagePage.managersNameEmployeesTitle, 'Diane Graybeals\'s Employees')
//             .click(selectors.header.name.currentName)
//             .useCss()
//             .click(selectors.header.name.stopImpersonating)
//     },

//     //Checks the "Assign Workspace" button and page load
//     '4. Assign Workspace: Button works, page loads': browser => {
//         browser
//             .waitForElementVisible(selectors.header.employeeSearch, 3000)
//             .useXpath()
//             .verify.containsText(selectors.header.name.currentName, 'Adam Martinez')
//             .useCss()
//             .click(selectors.header.employeeSearch)
//             .useXpath()
//             .waitForElementVisible(selectors.employeeSearchPage.employeeSearchTitle, 3000)
//             .useCss()
//             .setValue(selectors.employeeSearchPage.searchField, 'Cameron Smart')
//             .click(selectors.employeeSearchPage.searchButton)
//             .verify.visible(selectors.employeeSearchPage.searchResults)
//             .click(selectors.globals.assignWorkspaceButton)
//             .waitForElementVisible(selectors.assignWorkspacePage.newWorkspaceLabel, 3000)
//             .verify.containsText(selectors.assignWorkspacePage.newWorkspaceLabel, 'New Workspace')
//     },
//     //Checks the "Employment History" button and page load
//     '5. Employment History: Button works, page loads': browser => {
//         browser
//             .click(selectors.assignWorkspacePage.backButton)
//             .waitForElementVisible(selectors.employeeSearchPage.searchButton, 3000)
//             .setValue(selectors.employeeSearchPage.searchField, 'Cameron Smart')
//             .click(selectors.employeeSearchPage.searchButton)
//             .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
//             .verify.visible(selectors.globals.employmentHistoryButton)
//             .click(selectors.globals.employmentHistoryButton)
//             .useXpath()
//             .waitForElementVisible(selectors.employmentHistoryPage.prismEmployeeRecords, 3000)
//             .verify.containsText(selectors.employmentHistoryPage.prismEmployeeRecords, 'Prism Employee Records')
//             .verify.containsText(selectors.employmentHistoryPage.employementHistoryTitle, 'Employment History – Cameron John Marvin Smart')
//     },
//     //Checks the "View" button and page load
//     '6. Employment History: View Icon button works, page loads': browser => {
//         browser
//             .useCss()
//             .click(selectors.employmentHistoryPage.viewButton)
//             .useXpath()
//             .waitForElementVisible(selectors.employeePage.nameField, 3000)
//             .verify.containsText(selectors.employeePage.nameField, 'Cam Smart')
//     },
//     //Checks the "Merge" button, whether the merge's work or not and the page load (See line 208)
//     // '7. Employee History: Merge button works, page loads': browser => {
//     //     browser

//     //         .click(selectors.employeePage.cancelButton)
//     //         .waitForElementVisible(selectors.employmentHistoryPage.prismEmployeeRecords, 3000)
//     //         .verify.containsText(selectors.employmentHistoryPage.employementHistoryTitle, 'Employment History – Cameron John Marvin Smart')
//     //         .useCss()
//     //         .click(selectors.employmentHistoryPage.mergeButton)
//     //         .useXpath()
//     //         .waitForElementVisible(selectors.globals.chooseEmployeeToMergeAlert, 3000)
//     //         .verify.containsText(selectors.globals.chooseEmployeeToMergeAlert, 'Choose which employee record to merge with.')

//     //     // Need to figure a way to keep using Cam Smart to merge accounts. Right now we have to refresh dev5.marketstar.com/PrismReview each time we want the rest of this test to run.
//     //         .click(selectors.employmentHistoryPage.createNewButton)
//     //         .waitForElementVisible(selectors.globals.title, 3000)
//     //         .verify.containsText(selectors.globals.title, 'Create Employee Record')
//     //         .verify.containsText(selectors.createEmployeeRecordPage.contactField, 'Cam Smart')
//     //         .setValue(selectors.createEmployeeRecordPage.roleField, 'Sales Manager')

//     //     // .useCss()
//     //     // .click(selectors.employmentHistoryPage.mergeButton)
//     //     // .useXpath()
//     //     // .waitForElementVisible(selectors.mergeEmployeeRecordsPage.title, 3000)
//     //     // .verify.containsText(selectors.mergeEmployeeRecordsPage.title, 'Merge Employee Records')
//     //     // .useCss()
//     //     // .click(selectors.mergeEmployeeRecordsPage.redMergeButton)
//     //     // .useXpath()
//     //     // .waitForElementVisible(selectors.employmentHistoryPage.employementHistoryTitle, 3000)
//     //     // .verify.containsText(selectors.employmentHistoryPage.employementHistoryTitle, 'Successfully merged employee ')
//     // },
// 'GUID test': browser => {
//     browser 
//     .click(selectors.accountPage.logo)
//     .pause(500)
//     .click(selectors.header.humanResources)
//     .pause(500)
//     .click(selectors.header.humanResources.contactSearch)
//     .pause(500)
//     .setvalue(selectors.contactSearchPage.searchField, guid())
// }





// }
