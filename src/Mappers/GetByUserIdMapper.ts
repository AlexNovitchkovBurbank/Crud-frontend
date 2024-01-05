import Record from "../DataModels/Record"

const GetByUserIdMapper = {
    Map(id: string, name: string): Record {
        const record = new Record(id, name);

        return record;
    }
}

export default GetByUserIdMapper;