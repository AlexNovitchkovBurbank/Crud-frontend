import {v4 as uuidv4} from 'uuid';
import Record from '../../DataModels/Record';
import GetByUserIdPresenter from '../../Presenters/GetByUserIdPresenter';

it("Should make a string out of a valid record", () => {
    const id = uuidv4();
    const name = "Alex";
    let record = new Record(id, name);

    const actualRecordInOneLine = GetByUserIdPresenter.Present(record);

    const expectedRecordInOneLine = `ID: ${id}, Name: Alex`;

    expect(actualRecordInOneLine).toBe(expectedRecordInOneLine);
})

it("Should make a string out of an invalid record", () => {
    const id = '00000000-0000-0000-0000-000000000000';
    const name = "";
    let record = new Record(id, name);

    const actualRecordInOneLine = GetByUserIdPresenter.Present(record);

    const expectedRecordInOneLine = "";

    expect(actualRecordInOneLine).toBe(expectedRecordInOneLine);
})

it("Should be a valid record", () => {
    const id = uuidv4();
    const name = "Alex";
    let record = new Record(id, name);

    const actualRecordInOneLine = GetByUserIdPresenter.CheckIfValidRecord(record);

    expect(actualRecordInOneLine).toBe(true);
})

it("Should not be a valid record", () => {
    const id = '00000000-0000-0000-0000-000000000000';
    const name = "";
    let record = new Record(id, name);

    const actualRecordInOneLine = GetByUserIdPresenter.CheckIfValidRecord(record);

    expect(actualRecordInOneLine).toBe(false);
})