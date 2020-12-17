import {openApp} from "../page-object/izotope";


describe("Account", () => {
    it("Can Do Offline Authorization", () => {
        openApp()
            .wait(1)
            .acceptCookies()
            .wait(1)
            .clickAccountSection()
            .wait(1)
            .fillEmail("maark-shop-test@izotope.com")
            .nextStep()
            .wait(1)
            .fillPassword("Test")
            .login()
            .wait(4)
            .goToPurchaseHistory()
            .wait(1)
            .openRx8OfflineModal()
            .submitOfflineChallenge("IZ-Tres-Test-03F2-0259")
            .shouldHaveValidLicenseDownload();
    });
});
