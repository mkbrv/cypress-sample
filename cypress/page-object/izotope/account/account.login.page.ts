import {applyMixins} from "../../../utils";
import {PageMixin} from "../page.mixin";
import {AccountPage} from "./account.page";

export class AccountLoginPage extends PageMixin {

    fillEmail(text: string) {
        cy.scrollTo(0, 0)
        cy.get('input[name="email"]').type(text, {scrollBehavior: false, delay: 100});
        return this;
    }

    fillPassword(text: string) {
        cy.scrollTo(0, 0)
        cy.log("Type in Password ****** ");
        cy.get('input[name="password"]').type(text, {scrollBehavior: false, delay: 100, log: false});
        return this;
    }

    login() {
        this.nextStep();
        return new AccountPage();
    }

    nextStep() {
        cy.get(".izo-account-form button[type='submit']").click({scrollBehavior: false});
        cy.wait(1000);
        return this;
    }


}

applyMixins(AccountLoginPage, []);
