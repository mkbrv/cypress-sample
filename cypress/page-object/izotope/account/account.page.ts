import {applyMixins} from "../../../utils";
import {PageMixin} from "../page.mixin";

export class AccountPage extends PageMixin {

    goToPurchaseHistory() {
        cy.visit("/en/account/purchase-history");
        return this;
    }

    openRx8OfflineModal() {
        cy.get(".izo-purchase-history-item__product-name").contains("RX 8").eq(0)
            .parents(".izo-purchase-history-item__section")
            .find(".izo-purchase-history-item__row button")
            .contains("Offline")
            .click();
        cy.wait(100);
        cy.get(".izo-offline-form .izo-button--primary").click();
        cy.wait(100);
        return this;
    }

    submitOfflineChallenge(text: string) {
        cy.get('input[name="challengeValue"]').type(text, {scrollBehavior: false, delay: 50});
        cy.wait(100);
        cy.get(".izo-offline-form .izo-button--primary").click();
        return this;
    }

    shouldHaveValidLicenseDownload() {
        cy.get("a[download='RX_8_Advanced.izotopelicense']").should("exist");
        return this;
    }
}

applyMixins(AccountPage, []);
