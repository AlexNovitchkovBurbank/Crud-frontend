import GetByUserIdMapper from "../Mappers/GetByUserIdMapper";
import GetByUserIdPresenter from "../Presenters/GetByUserIdPresenter";
import GetByUserIdSender from "../Senders/GetByUserIdSender";

const GetByUserIdProcessor = {
    Process(id: string): string {
        const [userId, name] = GetByUserIdSender.Send(id);
        const record = GetByUserIdMapper.Map(userId, name);
        const recordInOneLine = GetByUserIdPresenter.Present(record);

        return recordInOneLine;
    }
}

export default GetByUserIdProcessor;