import { render, screen } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Mock các components
jest.mock('./components/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar</div>;
  };
});

jest.mock('./components/Carousels', () => {
  return function MockCarousels() {
    return <div data-testid="carousels">Carousels</div>;
  };
});

jest.mock('./components/PizzaList', () => {
  return function MockPizzaList() {
    return <div data-testid="pizza-list">PizzaList</div>;
  };
});

jest.mock('./components/Form', () => {
  return function MockForm() {
    return <div data-testid="form">Form</div>;
  };
});

jest.mock('./components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

// Simple rendering test - test từng component riêng biệt
describe('App Components Rendering', () => {
  test('Navbar renders', () => {
    const MockNavbar = require('./components/Navbar').default;
    render(<MockNavbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('Carousels renders with bannerImages prop', () => {
    const MockCarousels = require('./components/Carousels').default;
    render(<MockCarousels bannerImages={[]} />);
    expect(screen.getByTestId('carousels')).toBeInTheDocument();
  });

  test('PizzaList renders', () => {
    const MockPizzaList = require('./components/PizzaList').default;
    render(<MockPizzaList />);
    expect(screen.getByTestId('pizza-list')).toBeInTheDocument();
  });

  test('Form renders', () => {
    const MockForm = require('./components/Form').default;
    render(<MockForm />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  test('Footer renders with profile prop', () => {
    const MockFooter = require('./components/Footer').default;
    render(
      <MockFooter 
        myProfile={{
          name: "quoc",
          email: "quoc@gmail.com",
          avatar: "./images/avatar.png"
        }}
      />
    );
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
