import { render, screen } from '@testing-library/react';
import Button from '../frontend/src/UIComponentLibrary/Button';
import Card from '../frontend/src/UIComponentLibrary/Card';

test('renders Button with label', () => {
  render(<Button label="Click Me" onClick={() => {}} />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});

test('renders Card with title and content', () => {
  render(<Card title="Quest" content="Earn ZorCoin" aura="Radiant" />);
  expect(screen.getByText('Quest')).toBeInTheDocument();
  expect(screen.getByText('Earn ZorCoin')).toBeInTheDocument();
});
