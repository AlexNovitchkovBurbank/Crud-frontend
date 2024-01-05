import PostRecordProcessor from "../../Processors/PostUserRecordProcessor";
import PostUserRecordSender from "../../Senders/PostUserRecordSender";

it("Should process successfully", () => {
    const processPostSenderMock = jest.spyOn(PostUserRecordSender, 'Send');
    processPostSenderMock.mockImplementation(() => "Successfully saved!");

    const result = PostRecordProcessor.Process("Alex");

  expect(result).toBe('Successfully saved!');
})