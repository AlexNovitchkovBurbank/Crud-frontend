import { useState } from 'react';
import IdProcessor from '../GetByUserIdProcessor';

function GetById(): JSX.Element {
  const [id, setId] = useState('');
  const [result, setResult] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();

    setResult(IdProcessor.ProcessId(id));
  }

  const handleChange = (event: any) => {
    setId(event.target.value);
  };

  return (
    <>
      <h1 role="heading" aria-level={1} data-testid="GetByIdTitle">
        Get by id
      </h1>
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
          onChange={handleChange}
        />
        <button
          type="submit"
          data-testid="GetByIdButton"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div data-testid="GetByIdResponse">{result}</div>
    </>
  );
}

export default GetById;
