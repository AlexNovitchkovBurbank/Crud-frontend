import GetByUserIdMapper from "../Mappers/GetByUserIdMapper";
import GetByUserIdPresenter from "../Presenters/GetByUserIdPresenter";
import GetByUserIdSender from "../Senders/GetByUserIdSender";
import GetByUserIdValidator from "../Validators/GetByUserIdValidator";

const GetByUserIdProcessor = {
    async Process(id: string): Promise<string> {
        const errorObject = GetByUserIdValidator.Validate(id);

        if (!errorObject.valid)
            return errorObject.message;

        const jsonObject = await GetByUserIdSender.Send(id);
        const record = GetByUserIdMapper.MapJsonObjectToRecord(jsonObject);
        const recordInOneLine = GetByUserIdPresenter.Present(record);

        return recordInOneLine;
    }
}

export default GetByUserIdProcessor;