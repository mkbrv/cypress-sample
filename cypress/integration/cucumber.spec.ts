import {givenIAmNotLogged} from "../cucumber";

describe("Cucumber", () => {
    it("Test", () => {
        givenIAmNotLogged()
            .whenISearchTheUser("mkbrv{enter}")
            .thenISeeHimInList();
    });
});
