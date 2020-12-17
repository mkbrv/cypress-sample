import {IndexPage} from "./index.page";

export function openApp() {
    cy.clearCookies();
    cy.clearLocalStorage();
    window.sessionStorage.clear();
    cy.visit("/");
    return new IndexPage();
}
