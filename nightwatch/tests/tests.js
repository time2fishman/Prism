const selectors = require('../test_assets/selectors')
const data = require('../test_assets/data')
const functions = require('../test_assets/functions')

module.exports = {

    beforeEach: browser => {
        browser.url('https://dev5.marketstar.com/PrismReview')
    },

    after: browser => {
        browser.end()
    },

    'Account page UI check': browser => {
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

    'DAS Sign in UI check': browser => {
        browser
            .useCss()
            .verify.visible(selectors.accountPage.logo)
            .useXpath()
            // .verify.containsText(selectors.signInPage.das.loginMessage, 'Sign in with your organizational account')
            .click(selectors.accountPage.dasText)
            .useCss()
            .waitForElementVisible(selectors.signInPage.das.dasUsername, 3000)
            .expect.element(selectors.signInPage.das.dasUsername).to.have.attribute('placeholder').equals('someone@example.com')
        browser.expect.element(selectors.signInPage.das.dasPassword).to.have.attribute('placeholder').equals('Password')
        browser
            .verify.visible(selectors.signInPage.das.submitButton)
            .verify.containsText(selectors.signInPage.das.submitButton, 'Sign in')
    }       
}