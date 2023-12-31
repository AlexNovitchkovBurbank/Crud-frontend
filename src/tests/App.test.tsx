import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App.tsx';
import { BrowserRouter } from 'react-router-dom';

it('Should be on the dom', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const navbarComponent = screen.getByRole('main');

  expect(navbarComponent).toBeInTheDocument();
});
