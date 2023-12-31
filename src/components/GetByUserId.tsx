function GetById(): JSX.Element {
  return (
    <>
      <h1 role="heading" aria-level={1} data-testid="GetByIdTitle">Get by id</h1>
      <div
        className="d-flex flex-row justify-content-center"
        data-testid="GetByIdFlexbox"
      >
        <label
          data-testid="GetByIdLabel"
          htmlFor="GetByIdInput"
          className="form-label align-self-center"
        >
          Id:
        </label>
        <input
          type="text"
          data-testid="GetByIdInput"
          name="GetByIdInput"
          id="GetByIdInput"
          className="form-control mx-2 w-50"
        />
        <button
          type="submit"
          data-testid="GetByIdButton"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default GetById;
