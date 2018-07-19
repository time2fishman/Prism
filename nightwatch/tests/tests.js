const selectors = require('../test_assets/selectors')
const data = require('../test_assets/data')
const functions = require('../test_assets/functions')

module.exports = {

    // beforeEach: browser => {
    //     browser.url('https://dev5.marketstar.com/PrismReview')
    // },

    //after: browser => {
    // browser.end()
    //},

    //This test checks that all elements are present in the Company Selection page and that the text says what it should on each element.
    'Account page UI check': browser => {
        browser.url('https://dev5.marketstar.com/PrismReview')
        browser
            .maximizeWindow()
            .verify.visible(selectors.accountPage.logo)
            .verify.containsText(selectors.accountPage.signInWithWhichAccountText, 'Sign in with one of these accounts')
            .verify.visible(selectors.accountPage.dasIcon)
            .verify.visible(selectors.accountPage.mksIcon)
            .verify.visible(selectors.accountPage.ccrIcon)
            .verify.visible(selectors.accountPage.ccsIcon)
            .verify.visible(selectors.accountPage.help)
            .verify.containsText(selectors.accountPage.help, 'Help')
            .useXpath()
            .verify.containsText(selectors.accountPage.dasText, 'DAS Shared Services')
            .verify.containsText(selectors.accountPage.mkstxt, 'MarketStar')
            .verify.containsText(selectors.accountPage.ccrtxt, 'Creative Channel Retail')
            .verify.containsText(selectors.accountPage.ccstxt, 'Creative Channel Services')
            .useCss()
    },
    //This test checks that all elements are present on the MKS sign in page and that the text says what it should on each element. 
    //It also signs you into Prism
    'MKS Sign in check': browser => {

        browser
            .useCss()
            .verify.visible(selectors.accountPage.logo)
            .useXpath()
            // .verify.containsText(selectors.signInPage.das.loginMessage, 'Sign in with your organizational account')
            .click(selectors.accountPage.mkstxt)
            .useCss()
            .waitForElementVisible(selectors.signInPage.mks.userNameInput, 3000)
            .expect.element(selectors.signInPage.mks.userNameInput).to.have.attribute('placeholder').equals('someone@example.com')
        browser.expect.element(selectors.signInPage.mks.passwordInput).to.have.attribute('placeholder').equals('Password')
        browser
            .verify.visible(selectors.signInPage.mks.signInButton)
            .verify.containsText(selectors.signInPage.mks.signInButton, 'Sign in')
        browser
            .setValue(selectors.signInPage.mks.userNameInput, '')
            .setValue(selectors.signInPage.mks.passwordInput, '')
            .pause(1000)
            .click(selectors.signInPage.mks.signInButton)
            .verify.visible(selectors.internalJobTitlesPage.createNewButton)
    },

    //This test checks that all elements are present in the Header and that the text says what it should on each element.
    'Header UI check': browser => {
        browser
            .verify.visible(selectors.header.prismLogo)
            .useXpath()
            .verify.visible(selectors.header.humanResources.humanResourcesDropDown)
            .verify.containsText(selectors.header.humanResources.humanResourcesDropDown, 'Human Resources')
            .click(selectors.header.humanResources.humanResourcesDropDown)
            .useCss()
            .verify.visible(selectors.header.humanResources.cancelHire)
            .verify.containsText(selectors.header.humanResources.cancelHire, 'Cancel Hire')
            .useXpath()
            .verify.visible(selectors.header.humanResources.contactSearch)
            .verify.containsText(selectors.header.humanResources.contactSearch, 'Contact Search')
            .useCss()
            .verify.visible(selectors.header.humanResources.internalJobTitles)
            .verify.containsText(selectors.header.humanResources.internalJobTitles, 'Internal Job Titles')
            .verify.visible(selectors.header.humanResources.jobGrades)
            .verify.containsText(selectors.header.humanResources.jobGrades, 'Job Grades')
            .verify.visible(selectors.header.humanResources.organizationLevels)
            .verify.containsText(selectors.header.humanResources.organizationLevels, 'Organization Levels')
            .verify.visible(selectors.header.humanResources.projectJobTitles)
            .verify.containsText(selectors.header.humanResources.projectJobTitles, 'Project Job Titles')
            .verify.visible(selectors.header.humanResources.roleSearch)
            .verify.containsText(selectors.header.humanResources.roleSearch, 'Role Search')
            .verify.visible(selectors.header.humanResources.suspensions)
            .verify.containsText(selectors.header.humanResources.suspensions, 'Suspensions')
            .verify.visible(selectors.header.humanResources.transferRequests)
            .verify.containsText(selectors.header.humanResources.transferRequests, 'Transfer Requests')
            //Need to add finance, tasks, emplyee search, administration, help, and name drop down
    },

    //This test executes a basic 'employee search'
    '1. Employee Search: find contact by first name, given name, last name': browser => {
        browser
            .click(selectors.header.employeeSearch)
            .useXpath()
            .waitForElementVisible(selectors.employeeSearchPage.employeeSearchTitle, 3000)
            .verify.containsText(selectors.employeeSearchPage.employeeSearchTitle, 'Employee Search')
            .useCss()
            .setValue(selectors.employeeSearchPage.searchField, 'Cameron Smart')
            .click(selectors.employeeSearchPage.searchButton)
            .useXpath()
            .waitForElementVisible(selectors.employeeSearchPage.searchResults, 3000)
            .verify.containsText(selectors.employeeSearchPage.searchResults, 'Cam Smart')

    }
}