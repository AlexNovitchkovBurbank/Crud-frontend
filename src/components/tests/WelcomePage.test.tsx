import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import WelcomePage from '../WelcomePage.tsx';

it('Should be on the dom', () => {
  render(<WelcomePage />);
  
  const welcomePageH1Element = screen.getByRole("heading");

  expect(welcomePageH1Element).toBeInTheDocument();
  expect(welcomePageH1Element).toHaveTextContent("Welcome!");
});
