import { v4 as uuidv4 } from "uuid";
import Record from "../../DataModels/Record";
import GetByUserIdProcessor from "../../Processors/GetByUserIdProcessor";
import GetByUserIdMapper from "../../Mappers/GetByUserIdMapper";
import GetByUserIdPresenter from "../../Presenters/GetByUserIdPresenter";
import GetByUserIdSender from "../../Senders/GetByUserIdSender";

it("Should process successfully", () => {
  const getByUserIdSenderMock = jest.spyOn(GetByUserIdSender, "Send");
  const getByUserIdMapperFromJsonObjectToRecordMock = jest.spyOn(
    GetByUserIdMapper,
    "MapJsonObjectToRecord"
  );
  const getByUserIdPresenterMock = jest.spyOn(GetByUserIdPresenter, "Present");
  const id = uuidv4();
  const name = "Alex";
  let record = new Record(id, name);

  const recordInOneLine = `ID: ${id}, Name: Alex`;

  const jsonObject = {
    id: id,
    name: name,
  };

  getByUserIdSenderMock.mockImplementation(() => Promise.resolve(jsonObject));
  getByUserIdMapperFromJsonObjectToRecordMock.mockImplementation(() => record);
  getByUserIdPresenterMock.mockImplementation(() => recordInOneLine);

  const result = GetByUserIdProcessor.Process(id);

    expect(getByUserIdSenderMock).toHaveBeenCalledWith(id);
    expect(getByUserIdMapperFromJsonObjectToRecordMock).toHaveBeenCalledWith(
      jsonObject
    );
    expect(getByUserIdPresenterMock).toHaveBeenCalledWith(record);

    expect(getByUserIdSenderMock).toHaveBeenCalledTimes(1);
    expect(getByUserIdMapperFromJsonObjectToRecordMock).toHaveBeenCalledTimes(
      1
    );
    expect(getByUserIdPresenterMock).toHaveBeenCalledTimes(1);

    expect(result).toBe(recordInOneLine);
});
