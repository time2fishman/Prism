module.exports = {

    accountPage: {
        logo: 'img[class="logoImage"]',
        signInWithWhichAccountText: 'div[class="groupMargin"]',
        dasIcon: 'img[alt="DAS Shared Services"]',
        mksIcon: 'img[alt="MarketStar"]',
        ccrIcon: 'img[alt="Creative Channel Retail"]',
        ccsIcon: 'img[alt="Creative Channel Services"]',
        help: 'a[id="helpDesk"]',
        dasText: '//*[@id="bySelection"]/div[2]/div/span',
        mkstxt: '//*[@id="bySelection"]/div[3]/div/span',
        ccrtxt: '//*[@id="bySelection"]/div[4]/div/span',
        ccstxt: '//*[@id="bySelection"]/div[5]/div/span'
    },

    signInPage: {
        das: {
            loginMessage: '//*[@id="loginMessage"]',
            dasUsername: 'input[id="userNameInput"]',
            dasPassword: 'input[id="passwordInput"]',
            submitButton: 'span[id="submitButton"]',
            help: 'a[id="helpDesk"]',
        },

        mks: {
            mksIcon: 'img[alt="DAS Shared Services"]',
            userNameInput: 'input[id="userNameInput"]',
            passwordInput: 'input[id="passwordInput"]',
            signInButton: 'span[id="submitButton"]'
        }
    },

    homePage: {
        createNewButton: 'button[title="Create New"]'
    }
}