import Record from "../DataModels/Record";

const GetByUserIdPresenter = {
    Present(record: Record): string {
        let recordInLine: string = `ID: ${record.id}, Name: ${record.name}`;

        return recordInLine;
    }
}

export default GetByUserIdPresenter;