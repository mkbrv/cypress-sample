import {applyMixins} from "../../utils";
import {PageMixin} from "./page.mixin";
import {AccountLoginPage} from "./account/account.login.page";

export class IndexPage extends PageMixin {

    clickAccountSection() {
        cy.get(".izo-global-header__utility>button").click();
        return new AccountLoginPage();
    }

    acceptCookies() {
        cy.get("#onetrust-accept-btn-handler").click();
        return this;
    }

}

applyMixins(IndexPage, []);
