import PostRecordValidator from "../../Validators/PostRecordValidator";

it("Should make sure name is not empty", () => {
    const name = "";

    const errorObject = PostRecordValidator.Validate(name);

    expect(errorObject.valid).toBe(false);
    expect(errorObject.message).toBe("Name cannot be empty");
})

it("Should make sure name is not all whitespace", () => {
    const name = " ";

    const errorObject = PostRecordValidator.Validate(name);

    expect(errorObject.valid).toBe(false);
    expect(errorObject.message).toBe("Name cannot be all whitespace");
})

it("Name should be valid", () => {
    const name = "a";

    const errorObject = PostRecordValidator.Validate(name);

    expect(errorObject.valid).toBe(true);
    expect(errorObject.message).toBe("");
})