import { v4 as uuidv4 } from "uuid";
import Record from "../../DataModels/Record";
import GetByUserIdProcessor from "../../Processors/GetByUserIdProcessor";
import GetByUserIdMapper from "../../Mappers/GetByUserIdMapper";
import GetByUserIdPresenter from "../../Presenters/GetByUserIdPresenter";
import GetByUserIdSender from "../../Senders/GetByUserIdSender";
import GetByUserIdValidator from "../../Validators/GetByUserIdValidator";
import ErrorObject from "../../ErrorObject";

afterEach(() => {
  jest.clearAllMocks();
});

it("Should process successfully", () => {
  const getByUserIdValidatorMock = jest.spyOn(GetByUserIdValidator, "Validate");
  const getByUserIdSenderMock = jest.spyOn(GetByUserIdSender, "Send");
  const getByUserIdMapperFromJsonObjectToRecordMock = jest.spyOn(
    GetByUserIdMapper,
    "MapJsonObjectToRecord"
  );
  const getByUserIdPresenterMock = jest.spyOn(GetByUserIdPresenter, "Present");

  const errorObject: ErrorObject = new ErrorObject();
  errorObject.valid = true;
  errorObject.message = "";

  const id = uuidv4();
  const name = "Alex";
  let record = new Record(id, name);

  const recordInOneLine = `ID: ${id}, Name: Alex`;

  const jsonObject = {
    id: id,
    name: name,
  };

  getByUserIdValidatorMock.mockReturnValue(errorObject);
  getByUserIdSenderMock.mockResolvedValue(jsonObject); // mockResolvedValue Used with async calls
  getByUserIdMapperFromJsonObjectToRecordMock.mockReturnValue(record); // mockReturnedValue Used with normal calls
  getByUserIdPresenterMock.mockReturnValue(recordInOneLine);

  GetByUserIdProcessor.Process(id).then((result) => {
    expect(getByUserIdSenderMock).toHaveBeenCalledWith(id);
    expect(getByUserIdMapperFromJsonObjectToRecordMock).toHaveBeenCalledWith(
      jsonObject
    );
    expect(getByUserIdPresenterMock).toHaveBeenCalledWith(record);

    expect(getByUserIdValidatorMock).toHaveBeenCalledTimes(1);
    expect(getByUserIdSenderMock).toHaveBeenCalledTimes(1);
    expect(getByUserIdMapperFromJsonObjectToRecordMock).toHaveBeenCalledTimes(
      1
    );
    expect(getByUserIdPresenterMock).toHaveBeenCalledTimes(1);

    expect(result).toBe(recordInOneLine);
  });
});

it("id is not a guid", () => {
  const getByUserIdValidatorMock = jest.spyOn(GetByUserIdValidator, "Validate");

  const errorObject: ErrorObject = new ErrorObject();
  errorObject.valid = false;
  errorObject.message = "id is not a guid";

  const id = "1";

  getByUserIdValidatorMock.mockReturnValue(errorObject);

  GetByUserIdProcessor.Process(id).then((result) => {
    expect(getByUserIdValidatorMock).toHaveBeenCalledWith(id);

    expect(getByUserIdValidatorMock).toHaveBeenCalledTimes(1);

    expect(result).toBe("id is not a guid");
  });
});
