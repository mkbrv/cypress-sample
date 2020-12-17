import {IndexPage} from "../page-object/github/index.page";
import {SearchUsersPage} from "../page-object/github/search";
import {openApp} from "../page-object/github";

export function givenIAmNotLogged() {
    return openApp();
}

declare module "../page-object/github/index.page" {
    interface IndexPage {
        whenISearchTheUser(value: string): SearchUsersPage;
    }
}

IndexPage.prototype.whenISearchTheUser = function (value: string) {
    return this.fillSearch(value)
        .clickOnMenuUsers();
}

declare module "../page-object/github/search/search-users.page" {
    interface SearchUsersPage {
        thenISeeHimInList(): SearchUsersPage;
    }
}

SearchUsersPage.prototype.thenISeeHimInList = function () {
    return this.withUsers(users => expect(users.length).to.be.least(1));
}
