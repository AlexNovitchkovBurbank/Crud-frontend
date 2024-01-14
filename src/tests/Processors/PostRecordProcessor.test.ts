import ErrorObject from "../../ErrorObject";
import PostRecordPresenter from "../../Presenters/PostRecordPresenter";
import PostRecordProcessor from "../../Processors/PostUserRecordProcessor";
import PostUserRecordSender from "../../Senders/PostUserRecordSender";
import UUIDCreator from "../../Utilities/UUIDCreator";
import PostRecordValidator from "../../Validators/PostRecordValidator";
import { v4 as uuidv4 } from "uuid";

afterEach(() => {
  jest.clearAllMocks();
});

it("Should process successfully", async () => {
  const messageFromBackend = "Successfully saved!";
  const name = "Alex";
  const uuid = uuidv4();
  const resultingString = `${messageFromBackend} id to get the record is ${uuid}`;

  const postRecordValidatorMock = jest.spyOn(PostRecordValidator, "Validate");
  const UUIDCreatorMock = jest.spyOn(UUIDCreator, "Create");
  const postRecordSenderMock = jest.spyOn(PostUserRecordSender, "Send");
  const postRecordPresenterMock = jest.spyOn(PostRecordPresenter, "Present");

  const errorObject = new ErrorObject();

  errorObject.valid = true;
  errorObject.message = "";

  postRecordValidatorMock.mockReturnValue(errorObject);
  UUIDCreatorMock.mockReturnValue(uuid);
  postRecordSenderMock.mockResolvedValue(messageFromBackend);

  postRecordPresenterMock.mockReturnValue(resultingString);

  PostRecordProcessor.Process(name).then((result) => {
    expect(postRecordValidatorMock).toHaveBeenCalledWith(name);
    expect(UUIDCreatorMock).toHaveBeenCalledWith();
    expect(postRecordSenderMock).toHaveBeenCalledWith(uuid, name);
    expect(postRecordPresenterMock).toHaveBeenCalledWith(uuid);

    expect(postRecordValidatorMock).toHaveBeenCalledTimes(1);
    expect(UUIDCreatorMock).toHaveBeenCalledTimes(1);
    expect(postRecordSenderMock).toHaveBeenCalledTimes(1);
    expect(postRecordPresenterMock).toHaveBeenCalledTimes(1);

    expect(result).toBe(resultingString);
  });
});

it("Should not be successful", () => {
  const name = "";

  const postRecordValidatorMock = jest.spyOn(PostRecordValidator, "Validate");

  const errorObject = new ErrorObject();

  errorObject.valid = false;
  errorObject.message = "name cannot be empty";

  postRecordValidatorMock.mockReturnValue(errorObject);

  PostRecordProcessor.Process(name).then((result) => {
    expect(postRecordValidatorMock).toHaveBeenCalledWith(name);

    expect(postRecordValidatorMock).toHaveBeenCalledTimes(1);

    expect(result).toBe("name cannot be empty");
  });
});
