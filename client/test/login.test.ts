import { render, screen } from '@testing-library/react';
import Login from '../src/app/auth/login/page';

test('login test', () => {
  render(<Login />);    
  const linkElement = screen.getByText("Login");
  expect(linkElement).toBeInTheDocument();
});
