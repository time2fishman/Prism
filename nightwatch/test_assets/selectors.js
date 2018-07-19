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

    header: {
        prismLogo: 'img[alt="logo"]',
        humanResources: {
            humanResourcesDropDown: '/html/body/div[1]/div/div[2]/ul[1]/li[1]/a',
            cancelHire: 'a[href="/PrismReview/Onboarding/CancelHire"]',
            contactSearch: '/html/body/div[1]/div/div[2]/ul[1]/li[1]/ul/li[2]/a',
            internalJobTitles: 'a[href="/PrismReview/InternalJobTitle"]',
            jobGrades: 'a[href="/PrismReview/JobGrade"]',
            organizationLevels: 'a[href="/PrismReview/Roles/WithoutOrganizationLevels"]',
            projectJobTitles: 'a[href="/PrismReview/InternalJobTitle/Projects"]',
            roleSearch: 'a[href="/PrismReview/Roles/Search"]',
            suspensions: 'a[href="/PrismReview/Suspension"]',
            transferRequests: 'a[href="/PrismReview/TransferRequests"]',
        },
        employeeSearch: 'a[href="/PrismReview/Employee/Search"]',
        administrationTab: 'a[href="/PrismReview/Administration"]'
        
        
    },

    internalJobTitlesPage: {

        createNewButton: 'button[title="Create New"]',

    },

    employeeSearchPage: {
        employeeSearchTitle: '/html/body/div[2]/div/h2',
        searchField: 'input[name="query"]',
        searchButton: 'input[type="submit"]',
        searchResults: 'a[href="/PrismReview/Employee/Details/61045'


    },

    employeePage: {
        employeeNameTitle: '/html/body/div[2]/div/h2',
        nameField: '//*[@id="mainForm"]/div[1]/div[1]/div/div',

    },

    administrationPage: {
        administrationTitle: '/html/body/div[2]/div/h2',
        contactSearch: 'a[href="/PrismReview/Contacts/Search"]',

    },

    contactSearchPage: {
        contactSearchTitle: '/html/body/div[2]/div/h2',
        searchField: 'input[name="query"]',
        searchButton: 'input[type="submit"]',
        impersonateButton: '/html/body/div[3]/table/tbody/tr[2]/td[6]/a[6]/i',
    },

    employeesIManagePage: {
        managersNameEmployeesTitle: '/html/body/div[2]/div/h2',
        pageBody: 'div[class="container body-content"]',
        managersEmployeesButton: 'a[href="/PrismReview/HiringManager/Index/559"]'
    }



}