import Nav from './Navbar.tsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

it('Should be on the dom', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const getByIdNavElement = screen.getByTestId('GetById');
  const postRecordElement = screen.getByTestId('PostRecord');

  expect(getByIdNavElement).toBeInTheDocument();
  expect(postRecordElement).toBeInTheDocument();
});
