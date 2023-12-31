function PostRecord(): JSX.Element {
  return (
    <>
      <h1 role="heading" aria-level={1} data-testid="PostRecordTitle">Post record</h1>
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
        />
        <button
          type="submit"
          data-testid="PostRecordButton"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default PostRecord;
