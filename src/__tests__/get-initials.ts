import { getInitials } from "../utils";

it("Should return the correct initials for a full name", () => {
  expect(getInitials("Phillip Boateng")).toBe("PB");
});

it("Should return the correct initials for just first name", () => {
  expect(getInitials("Phillip")).toBe("P");
});
