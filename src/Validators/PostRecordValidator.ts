import ErrorObject from "../ErrorObject";

const PostRecordValidator = {
    Validate(name: string): ErrorObject {
        const errorObject = new ErrorObject();

        if (name === "") {
            errorObject.valid = false;
            errorObject.message = "Name cannot be empty";

            return errorObject;
        }

        if (name.trim() === "") {
            errorObject.valid = false;
            errorObject.message = "Name cannot be all whitespace";

            return errorObject;
        }

        errorObject.valid = true;
        errorObject.message = "";
        return errorObject;
    }
}

export default PostRecordValidator;