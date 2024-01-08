import { useState } from "react";
import PostRecordProcessor from "../Processors/PostUserRecordProcessor";

function PostRecord(): JSX.Element {
  const [name, setName] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    const response = PostRecordProcessor.Process(name);
    setResult(response);
  }

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1 role="heading" aria-level={1} data-testid="PostRecordTitle">
        Post record
      </h1>
      <div
        className="d-flex flex-row justify-content-center"
        data-testid="PostRecordFlexbox"
      >
        <label
          data-testid="PostRecordLabel"
          htmlFor="PostRecordInput"
          className="form-label align-self-center"
        >
          Name:
        </label>
        <input
          type="text"
          data-testid="PostRecordInput"
          name="PostRecordInput"
          id="PostRecordInput"
          className="form-control mx-2 w-50"
          onChange={handleChange}
        />
        <button
          type="submit"
          data-testid="PostRecordButton"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div data-testid="PostRecordResponse">{result}</div>
    </>
  );
}

export default PostRecord;
