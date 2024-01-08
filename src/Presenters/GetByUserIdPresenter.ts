import Record from "../DataModels/Record";

const GetByUserIdPresenter = {
    Present(record: Record): string {
        let recordInLine = "";

        if (this.CheckIfValidRecord(record) === true)
            recordInLine = `ID: ${record.id}, Name: ${record.name}`;
        else
            recordInLine = "";

        return recordInLine;
    },

    CheckIfValidRecord(record: Record): boolean {
        if (record.id === "00000000-0000-0000-0000-000000000000")
            return false;
        return true;
    }
}

export default GetByUserIdPresenter;