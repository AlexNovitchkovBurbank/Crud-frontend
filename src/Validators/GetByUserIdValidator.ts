import { validate } from "uuid";
import ErrorObject from "../ErrorObject";

const GetByUserIdValidator = {
    Validate(idAsGuid: string): ErrorObject {
        const errorObject = new ErrorObject();
        
        if (!validate(idAsGuid)) {
            errorObject.valid = false;
            errorObject.message = "id is not a guid";

            return errorObject;
        }

        errorObject.valid = true;
        errorObject.message = "";

        return errorObject;
    }
}

export default GetByUserIdValidator;