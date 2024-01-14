import { v4 as uuidv4 } from "uuid";
import PostRecordPresenter from "../../Presenters/PostRecordPresenter";

it("Response should be successfully saved! + the id", () => {
    const id = uuidv4();

    const result = PostRecordPresenter.Present(id);

    expect(result).toBe(`Record id: ${id}`);
})