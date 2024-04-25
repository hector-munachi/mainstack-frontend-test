/* eslint-disable no-undef */
// UserDataComponent.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import Jest DOM extension matchers
import UserDataComponent from '../src/components/UserDataComponent';

// Mock the fetch function to simulate API calls
jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

describe('UserDataComponent', () => {
  test('renders loading message initially', async () => {
    render(<UserDataComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders user data correctly', async () => {
    const mockUserData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com'
    };

    fetch.mockResponseOnce(JSON.stringify(mockUserData));

    render(<UserDataComponent />);

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    fetch.mockRejectOnce(new Error('Failed to fetch'));

    render(<UserDataComponent />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching user data: Failed to fetch')).toBeInTheDocument();
    });
  });
});
