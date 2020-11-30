# Cypress/TypeScript/PageObject template for *e2e testing*

Sample:
```typescript
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
```
