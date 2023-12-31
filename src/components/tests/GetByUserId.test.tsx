import GetById from '../GetByUserId.tsx';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Should be on the dom', () => {
  render(<GetById />);
  
  const getByIdHeaderElement = screen.getByTestId('GetByIdTitle');
  const getByIdFlexboxElement = screen.getByTestId('GetByIdFlexbox');

  const getByIdLabelElement = within(getByIdFlexboxElement).getByTestId('GetByIdLabel');
  const getByIdInputElement = within(getByIdFlexboxElement).getByTestId('GetByIdInput');
  const getByIdButtonElement = within(getByIdFlexboxElement).getByTestId('GetByIdButton');

  expect(getByIdFlexboxElement).toBeInTheDocument();
  expect(getByIdFlexboxElement).toHaveClass("d-flex flex-row justify-content-center");

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
