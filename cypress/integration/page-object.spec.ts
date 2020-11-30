import {openApp} from "../page-object";

describe("Page object", () => {
    it("GitHub", () => {
        openApp()
            .withLoginLink(link => expect(link.text().trim()).to.equal("Sign in"))
            .fillSearch("mkbrv{enter}")
            .clickOnMenuUsers()
            .withUsers(users => expect(users.length).to.be.at.least(1))
            .clickOnUser(0)
            .clickOnRepositoriesTab()
            .fillSearch("camel-google-cloud-messaging")
            .withRepositories(repositories => expect(repositories.length).to.equal(1))
            .clickOnRepository(0);
    });
});
