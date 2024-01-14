import UUIDCreator from "../../Utilities/UUIDCreator";

it("Should return a uuid as a string", () => {
  const regex =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  const id = UUIDCreator.Create();

  expect(id).toMatch(regex);
});
