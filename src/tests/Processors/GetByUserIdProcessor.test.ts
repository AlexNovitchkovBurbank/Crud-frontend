import {v4 as uuidv4} from 'uuid';
import GetByUserIdSender from "../../Senders/GetByUserIdSender";
import Record from "../../DataModels/Record";
import GetByUserIdProcessor from '../../Processors/GetByUserIdProcessor';
import GetByUserIdMapper from '../../Mappers/GetByUserIdMapper';
import GetByUserIdPresenter from '../../Presenters/GetByUserIdPresenter';

it("Should process successfully", () => {
    const getByUserIdSenderMock = jest.spyOn(GetByUserIdSender, 'Send');
    const getByUserIdMapperMock = jest.spyOn(GetByUserIdMapper, 'Map');
    const getByUserIdPresenterMock = jest.spyOn(GetByUserIdPresenter, 'Present');

    const id = uuidv4();
    const name = "Alex";
    let record = new Record(id, name);

    const recordInOneLine = `ID: ${id}, Name: Alex`;

    getByUserIdSenderMock.mockImplementation(() => [id, name]);
    getByUserIdMapperMock.mockImplementation(() => record);
    getByUserIdPresenterMock.mockImplementation(() => recordInOneLine);

    const result = GetByUserIdProcessor.Process(id);

    expect(getByUserIdSenderMock).toHaveBeenCalledWith(id);
    expect(getByUserIdMapperMock).toHaveBeenCalledWith(id, name);
    expect(getByUserIdPresenterMock).toHaveBeenCalledWith(record);

    expect(getByUserIdSenderMock).toHaveBeenCalledTimes(1);
    expect(getByUserIdMapperMock).toHaveBeenCalledTimes(1);
    expect(getByUserIdPresenterMock).toHaveBeenCalledTimes(1);

  expect(result).toBe(recordInOneLine);
})