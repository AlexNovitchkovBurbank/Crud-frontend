import PostUserRecordSender from "../Senders/PostUserRecordSender";

const PostRecordProcessor = {
    Process(name: string): string {
        let message = PostUserRecordSender.Send(name);

        return message;
    }
}
export default PostRecordProcessor;