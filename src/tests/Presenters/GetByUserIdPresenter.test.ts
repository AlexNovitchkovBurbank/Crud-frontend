import {v4 as uuidv4} from 'uuid';
import Record from '../../DataModels/Record';
import GetByUserIdPresenter from '../../Presenters/GetByUserIdPresenter';

it("Should present in string format", () => {
    const id = uuidv4();
    const name = "Alex";
    let record = new Record(id, name);

    const actualRecordInOneLine = GetByUserIdPresenter.Present(record);

    const expectedRecordInOneLine = `ID: ${id}, Name: Alex`;

    expect(actualRecordInOneLine).toBe(expectedRecordInOneLine);
})