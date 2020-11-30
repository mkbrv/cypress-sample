import {openApp} from "../page-object";

describe("Mixins", () => {
    it("Login fragment", () => {
        openApp()
            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))

            .fillSearch("mkbrv{enter}")
            .clickOnMenuUsers()
            .clickOnUser(0)

            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))
            .clickOnRepositoriesTab();
    });
});
