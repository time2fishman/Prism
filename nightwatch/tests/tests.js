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

    'Account page UI check': browser => {
        browser.url('https://dev5.marketstar.com/PrismReview')
        browser
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
            .setValue(selectors.signInPage.mks.userNameInput, 'amartinez@marketstar.com')
            .setValue(selectors.signInPage.mks.passwordInput, '')
            .pause(1000)
            .click(selectors.signInPage.mks.signInButton)
            .verify.visible(selectors.internalJobTitlesPage.createNewButton)
    },

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
            .end()
    }
}