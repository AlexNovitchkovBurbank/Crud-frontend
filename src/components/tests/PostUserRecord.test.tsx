import PostRecord from '../PostUserRecord.tsx';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Should be on the dom', () => {
  render(<PostRecord />);
  
  const postRecordHeaderElement = screen.getByTestId('PostRecordTitle');
  const postRecordFlexboxElement = screen.getByTestId('PostRecordFlexbox');

  const postRecordLabelElement = within(postRecordFlexboxElement).getByTestId('PostRecordLabel');
  const postRecordInputElement = within(postRecordFlexboxElement).getByTestId('PostRecordInput');
  const postRecordButtonElement = within(postRecordFlexboxElement).getByTestId('PostRecordButton');

  expect(postRecordFlexboxElement).toBeInTheDocument();
  expect(postRecordFlexboxElement).toHaveClass("d-flex flex-row justify-content-center");

  expect(postRecordHeaderElement).toBeInTheDocument();
  expect(postRecordHeaderElement).toHaveTextContent("Post record");

  expect(postRecordLabelElement).toBeInTheDocument();
  expect(postRecordLabelElement).toHaveTextContent("Name:");
  expect(postRecordLabelElement).toHaveClass("form-label align-self-center");

  expect(postRecordInputElement).toBeInTheDocument();
  expect(postRecordInputElement).toContainHTML("");
  expect(postRecordInputElement).toHaveClass("form-control mx-2 w-50");

  expect(postRecordButtonElement).toBeInTheDocument();
  expect(postRecordButtonElement).toHaveTextContent("Submit");
  expect(postRecordButtonElement).toHaveClass("btn btn-primary");
});
