describe("Example", () => {
    it("GitHub", () => {
        cy.visit("/");
        cy.get<HTMLAnchorElement>('a.HeaderMenu-link[href^="/login"]').then(link => expect(link.text().trim()).to.equal("Sign in"));
        cy.get('input[name="q"]').type("mkbrv{enter}");
        cy.get("a.menu-item[href$='type=users']").click();
        cy.get("span.Progress.is-loading").should("not.exist"); // wait
        cy.get<HTMLDivElement>(".user-list > .user-list-item").then(users => expect(users.length).to.be.at.least(1));
        cy.get<HTMLDivElement>(".user-list > .user-list-item").eq(0).find("a.mr-1").click();
        cy.get("nav.UnderlineNav-body").find("a").eq(1).click();
        cy.get("input#your-repos-filter").type("camel-google-cloud-messaging");
        cy.url().should("contains", "camel-google-cloud-messaging"); // wait
        cy.get<HTMLLIElement>('ul[data-filterable-for="your-repos-filter"] > li').then(repositories => expect(repositories.length).to.equal(1))
        cy.get<HTMLLIElement>('ul[data-filterable-for="your-repos-filter"] > li').find("a").eq(0).click();
    });
});
