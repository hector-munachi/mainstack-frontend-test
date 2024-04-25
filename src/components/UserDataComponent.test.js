/* eslint-disable no-undef */

import { render, waitFor } from '@testing-library/react';
import UserDataComponent from './UserDataComponent';

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
      }),
  })
);

describe('UserDataComponent', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders loading state initially', () => {
    const { getByText } = render(<UserDataComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user data correctly after fetching', async () => {
    const { getByText } = render(<UserDataComponent />);
    
    // Wait for the component to finish fetching data
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('john.doe@example.com')).toBeInTheDocument();
  });

  it('displays error message when fetching fails', async () => {
    // Mocking fetch function to simulate error
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));
    
    const { getByText } = render(<UserDataComponent />);
    
    // Wait for the component to handle the error
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    
    expect(getByText('Error fetching user data: Fetch failed')).toBeInTheDocument();
  });
});
