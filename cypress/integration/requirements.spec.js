/**
 * Requirements
 * ============
 *
 * - User can list contacts √
 * - User can view a contact √
 * - User can edit a contact √
 * - User can delete a contact √
 * - User can create a contact √
 */

const testName = "Phillip Boateng";
const testEmail = "phillip@mail.com";

describe("Testing IQVIA Requirments", function() {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const createContact = () => {
    const createButton = '[data-testid="create-contact-button"]';
    const nameField = '[data-testid="create-contact-name-field"]';
    const emailField = '[data-testid="create-contact-email-field"]';
    const dialogSubmit = '[data-testid="dialog-submit-button"]';

    cy.get(createButton).click();
    cy.get(nameField)
      .focus()
      .clear()
      .type(testName);
    cy.get(emailField)
      .focus()
      .clear()
      .type(testEmail);
    cy.get(dialogSubmit).click();
  };

  const deleteContact = () => {
    const firstCard = '[data-testid="0-contact-card"]';
    const deleteButton = '[data-testid="contact-view-delete-button"]';
    const dialogSubmit = '[data-testid="dialog-submit-button"]';

    cy.get(firstCard).click();
    cy.get(deleteButton).click();
    cy.get(dialogSubmit).click();
  };

  it("Should create 3 new contact", () => {
    for (let i = 0; i < 3; i++) {
      createContact();
    }
  });

  it("Should list contacts", () => {
    cy.get("#contact-list-container")
      .children()
      .should("have.length.greaterThan", 1);
  });

  it("Should display a single contact", () => {
    const firstCard = '[data-testid="0-contact-card"]';
    const nameText = '[data-testid="contact-view-name"]';
    const emailText = '[data-testid="contact-view-email"]';

    cy.get(firstCard).click();
    cy.get(nameText).should("to.have.text", testName);
    cy.get(emailText).should("to.have.text", testEmail);
  });

  it("Should update a contact details", () => {
    const firstCard = '[data-testid="0-contact-card"]';
    const editButton = '[data-testid="contact-view-edit-button"]';
    const saveButton = '[data-testid="contact-view-save-button"]';
    const nameField = '[data-testid="contact-view-name-field"]';
    const emailField = '[data-testid="contact-view-email-field"]';

    cy.get(firstCard).click();
    cy.get(editButton).click();
    cy.get(nameField)
      .focus()
      .clear()
      .type("Test Name");
    cy.get(emailField)
      .focus()
      .clear()
      .type("test@mail.com");
    cy.get(saveButton).click();
  });

  it("Should delete a contact", () => {
    for (let i = 0; i < 3; i++) {
      deleteContact();
    }

    cy.get("#contact-list-container")
      .children()
      .should("have.length.lessThan", 3);
  });
});
