/* eslint-disable no-undef */
// WalletDataComponent.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import Jest DOM extension matchers
import WalletDataComponent from './WalletDataComponent';

// Mock the fetch function to simulate API calls
jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

describe('WalletDataComponent', () => {
  test('renders loading message initially', async () => {
    render(<WalletDataComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders wallet data correctly', async () => {
    const mockWalletData = {
      ledger_balance: 100,
      total_payout: 200,
      total_revenue: 300,
      pending_payout: 400
    };

    fetch.mockResponseOnce(JSON.stringify(mockWalletData));

    render(<WalletDataComponent />);

    await waitFor(() => {
      expect(screen.getByText('USD 100')).toBeInTheDocument();
      expect(screen.getByText('USD 200')).toBeInTheDocument();
      expect(screen.getByText('USD 300')).toBeInTheDocument();
      expect(screen.getByText('USD 400')).toBeInTheDocument();
    });
  });

  test('handles fetch error', async () => {
    fetch.mockRejectOnce(new Error('Failed to fetch'));

    render(<WalletDataComponent />);

    await waitFor(() => {
      expect(screen.getByText('Error fetching wallet data: Failed to fetch')).toBeInTheDocument();
    });
  });
});
