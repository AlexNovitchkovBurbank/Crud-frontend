import GetByUserIdMapper from "../Mappers/GetByUserIdMapper";
import GetByUserIdPresenter from "../Presenters/GetByUserIdPresenter";
import GetByUserIdSender from "../Senders/GetByUserIdSender";

const GetByUserIdProcessor = {
    async Process(id: string): Promise<string> {
        const jsonObject = await GetByUserIdSender.Send(id);
        const record = GetByUserIdMapper.MapJsonObjectToRecord(jsonObject);
        const recordInOneLine = GetByUserIdPresenter.Present(record);

        return recordInOneLine;
    }
}

export default GetByUserIdProcessor;