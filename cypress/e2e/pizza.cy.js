describe("", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Clicks on a food card and navigates to order page", () => {
    cy.get(".foodCardsContainer").first().click();

    cy.url().should("include", "/order");
  });

  it("should enter a name in the input field", () => {
    const name = "John Doe";

    // Navigate to the order page before entering the name
    cy.get(".foodCardsContainer").first().click();
    cy.url().should("include", "/order");

    cy.get('input[placeholder="İsminizi giriniz"]').type(name);

    cy.get('input[placeholder="İsminizi giriniz"]').should("have.value", name);
  });

  it("should select multiple ingredients", () => {
    cy.get(".foodCardsContainer").first().click();
    cy.url().should("include", "/order");

    const Selected = ["Sucuk", "Domates", "Jalepeno", "Kabak"];

    Selected.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });

      cy.get('input[type="checkbox"][value="' + ingredient + '"]').should(
        "be.checked"
      );
    });
  });

  it("should select dough type", () => {
    cy.get(".foodCardsContainer").first().click();
    cy.url().should("include", "/order");

    const hamur = "İnce";

    cy.get('select[name="hamur"]').select(hamur);

    cy.get('select[name="hamur"]').should("have.value", hamur);
  });

  it("should select pizza size", () => {
    cy.get(".foodCardsContainer").first().click();
    cy.url().should("include", "/order");
    const pizzaSize = "M";

    cy.get('input[type="radio"][value="' + pizzaSize + '"]')
      .scrollIntoView()
      .check({ force: true });

    cy.get('input[type="radio"][value="' + pizzaSize + '"]').should(
      "be.checked"
    );
  });

  it('should submit the form when clicking "SİPARİŞ VER" button', () => {
    cy.get(".foodCardsContainer").first().click();
    cy.url().should("include", "/order");

    cy.get('input[placeholder="İsminizi giriniz"]').type("John Doe");

    const ingredientsToSelect = ["Sucuk", "Domates", "Jalepeno", "Kabak"];
    ingredientsToSelect.forEach((ingredient) => {
      cy.get('input[type="checkbox"][value="' + ingredient + '"]').check({
        force: true,
      });
    });

    cy.get('select[name="hamur"]').select("İnce");

    cy.get('input[type="radio"][value="M"]')
      .check({ force: true })
      .scrollIntoView();

    cy.get(".OrderedButton").click({ force: true });

    cy.url().should("include", "/accepted");
  });
});
