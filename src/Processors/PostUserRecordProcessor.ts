import PostRecordPresenter from "../Presenters/PostRecordPresenter";
import PostUserRecordSender from "../Senders/PostUserRecordSender";
import UUIDCreator from "../Utilities/UUIDCreator";
import PostRecordValidator from "../Validators/PostRecordValidator";

const PostRecordProcessor = {
    async Process(name: string): Promise<string> {
        const errorObject = PostRecordValidator.Validate(name);
        const uuid = UUIDCreator.Create();

        if (!errorObject.valid)
            return errorObject.message;
        
        await PostUserRecordSender.Send(uuid, name);
        const message = PostRecordPresenter.Present(uuid);

        return message;
    }
}
export default PostRecordProcessor;