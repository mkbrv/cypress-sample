export class PageMixin {
    wait(seconds?: number) {
        cy.wait(seconds ? seconds * 1000 : 5000)
        return this;
    }
}
