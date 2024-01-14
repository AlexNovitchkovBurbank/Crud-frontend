import {v4 as uuidv4} from 'uuid';
import GetByUserIdValidator from "../../Validators/GetByUserIdValidator"

it("Should be a valid id", () => {    
    const idAsGuid = uuidv4();

    const result = GetByUserIdValidator.Validate(idAsGuid);

    expect(result.valid).toBe(true);
    expect(result.message).toBe("");
})

it("Should be an invalid id", () => {
    const id = "1";

    const result = GetByUserIdValidator.Validate(id);

    expect(result.valid).toBe(false);
    expect(result.message).toBe("id is not a guid");
})