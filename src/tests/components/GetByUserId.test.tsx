import GetById from "../../components/GetByUserId.tsx";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";
import GetByUserIdProcessor from "../../Processors/GetByUserIdProcessor.ts";

it("Should be on the dom", () => {
  render(<GetById />);

  const getByIdHeaderElement = screen.getByTestId("GetByIdTitle");
  const getByIdFlexboxElement = screen.getByTestId("GetByIdFlexbox");

  const getByIdLabelElement = within(getByIdFlexboxElement).getByTestId(
    "GetByIdLabel"
  );
  const getByIdInputElement = within(getByIdFlexboxElement).getByTestId(
    "GetByIdInput"
  );
  const getByIdButtonElement = within(getByIdFlexboxElement).getByTestId(
    "GetByIdButton"
  );

  expect(getByIdFlexboxElement).toBeInTheDocument();
  expect(getByIdFlexboxElement).toHaveClass(
    "d-flex flex-row justify-content-center"
  );

  expect(getByIdHeaderElement).toBeInTheDocument();
  expect(getByIdHeaderElement).toHaveTextContent("Get by id");

  expect(getByIdLabelElement).toBeInTheDocument();
  expect(getByIdLabelElement).toHaveTextContent("Id:");
  expect(getByIdLabelElement).toHaveClass("form-label align-self-center");

  expect(getByIdInputElement).toBeInTheDocument();
  expect(getByIdInputElement).toContainHTML("");
  expect(getByIdInputElement).toHaveClass("form-control mx-2 w-50");

  expect(getByIdButtonElement).toBeInTheDocument();
  expect(getByIdButtonElement).toHaveTextContent("Submit");
  expect(getByIdButtonElement).toHaveClass("btn btn-primary");
});

describe("Should wait for submit button to give back response", () => {
  it("Submit button clicked", async () => {
    const processIdMock = jest.spyOn(GetByUserIdProcessor, "Process");
    processIdMock.mockResolvedValue("1");
    render(<GetById />);

    fireEvent.click(screen.getByTestId("GetByIdButton"));

    await waitFor(() => { // Wait for is used to wait for an async inside the react component
      const getByIdResponseElement = screen.getByTestId("GetByIdResponse");
      expect(getByIdResponseElement).toBeInTheDocument();

      expect(getByIdResponseElement).toHaveTextContent("1");

      expect(processIdMock).toHaveBeenCalledTimes(1);
    });
  });
});
