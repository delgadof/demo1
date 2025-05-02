import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders GitHub Features Demo heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/GitHub Features Demo/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('counter increments when button is clicked', () => {
    render(<App />);
    const counterElement = screen.getByText(/Counter: 0/i);
    expect(counterElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Increment/i);
    fireEvent.click(buttonElement);

    const updatedCounterElement = screen.getByText(/Counter: 1/i);
    expect(updatedCounterElement).toBeInTheDocument();
  });

  test('displays list of GitHub features', () => {
    render(<App />);
    const featuresList = screen.getByText(/GitHub Features Demonstrated:/i);
    expect(featuresList).toBeInTheDocument();

    const features = [
      'GitHub Actions for CI/CD',
      'Automated Testing',
      'Code Quality Checks',
      'Automated Deployment',
      'Pull Request Workflows'
    ];

    features.forEach(feature => {
      const featureElement = screen.getByText(feature);
      expect(featureElement).toBeInTheDocument();
    });
  });
}); 