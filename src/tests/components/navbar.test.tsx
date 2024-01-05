import Nav from '../../components/Navbar.tsx';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

it('Should be on the dom', () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );

  const navbarDivElement = screen.getByTestId('NavbarDiv');

  const getByIdNavElement = within(navbarDivElement).getByTestId('GetById');
  const postRecordNavElement = within(navbarDivElement).getByTestId('PostRecord');

  expect(navbarDivElement).toBeInTheDocument();
  expect(navbarDivElement).toHaveClass("d-flex flex-row justify-content-end bg-dark");

  expect(getByIdNavElement).toBeInTheDocument();
  expect(getByIdNavElement).toHaveClass("me-3 px-2 py-2 text-decoration-none text-light");

  expect(postRecordNavElement).toBeInTheDocument();
  expect(postRecordNavElement).toHaveClass("me-3 px-2 py-2 text-decoration-none text-light");
});
