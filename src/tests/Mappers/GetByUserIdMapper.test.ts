import GetByUserIdMapper from "../../Mappers/GetByUserIdMapper";
import {v4 as uuidv4} from 'uuid';
import Record from "../../DataModels/Record";

it("Should map successfully", () => {
    const id = uuidv4();
    const name = "Alex";

    const actualRecord = GetByUserIdMapper.Map(id, name);
    
    let expectedRecord = new Record(id, name);

    expect(actualRecord.id).toBe(expectedRecord.id);
    expect(actualRecord.name).toBe(expectedRecord.name);
})
