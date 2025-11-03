import { render, screen } from '@testing-library/react';
import App from '../FrontendScaffolder/App';

test('renders HomePage initially', () => {
  render(<App />);
  expect(screen.getByText('Welcome to ZorTal')).toBeInTheDocument();
});
