import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Header from '../components/Header';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

vi.mock('axios');

beforeEach(() => {
  axios.get.mockReset();
  axios.post.mockReset();
});

describe('Sanity check', () => {
  test('renders the App component', async () => {
    render(<App />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
      ),
    });
  });
});

describe('Header Nav Links', () => {
  beforeEach(() => {
    render(<App />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
      ),
    });
  });

  test('opens the Login page', async () => {
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.click(loginButton);

    const loginHeading = screen.getByRole('heading');

    expect(loginHeading).toBeInTheDocument();
  });
});

describe('Login Form', () => {
  beforeEach(() => {
    render(<App />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/login']}>{children}</MemoryRouter>
      ),
    });
  });

  test('submits the Login form', async () => {
    const newUserPayload = {
      name: 'john doe',
    };

    const newUserMock = {
      id: 1,
      ...newUserPayload,
    };

    axios.post.mockResolvedValue({
      data: newUserMock,
    });

    const user = userEvent.setup();
    const emailInput = screen.getByTestId('login-form-email');
    const passInput = screen.getByLabelText(/password:/i);
    const submitButton = screen.getByTestId('login-form-submit-button');

    await user.type(emailInput, 'em@wit.co');
    await user.type(passInput, '12345678Ko*');
    await user.click(submitButton);
    expect(await screen.findByTestId('counter-display')).toBeInTheDocument();
    expect(await screen.findByText('Logout')).toBeInTheDocument();
  });

  test('opens fresh login page', async () => {
    expect(screen.queryByText('Logout')).not.toBeInTheDocument();
  });
});

describe('Login Form with browser router', () => {
  test('submits the Login form', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const loginButton = screen.getByText('Login');
    const user = userEvent.setup();
    await user.click(loginButton);

    const newUserPayload = {
      name: 'john doe',
    };

    const newUserMock = {
      id: 1,
      ...newUserPayload,
    };

    axios.post.mockResolvedValue({
      data: newUserMock,
    });

    const emailInput = screen.getByTestId('login-form-email');
    const passInput = screen.getByLabelText(/password:/i);
    const submitButton = screen.getByTestId('login-form-submit-button');

    await user.type(emailInput, 'em@wit.co');
    await user.type(passInput, '12345678Ko*');
    await user.click(submitButton);
    expect(await screen.findByTestId('counter-display')).toBeInTheDocument();
    expect(await screen.findByText('Logout')).toBeInTheDocument();
  });

  test('opens home page', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const homeBtn = screen.getByText('Home');
    const user = userEvent.setup();
    await user.click(homeBtn);
    screen.debug();

    expect(screen.queryByText('Home')).toHaveClass('active');
  });
});

describe('Header component:', () => {
  test('renders Header component', () => {
    render(
      <Header
        user={{}}
        setUser={() => {}}
        setIsDarkModeEnabled={() => {}}
        isDarkModeEnabled={true}
      />,
      { wrapper: BrowserRouter }
    );
  });
});
