/* eslint-disable no-undef */
// TransactionsComponent.test.jsx

import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM extension matchers
import TransactionsComponent from '../src/components/TransactionsComponent';

// Mock the fetch function to simulate API calls
jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox());

describe('TransactionsComponent', () => {
  test('renders loading message initially', async () => {
    render(<TransactionsComponent />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('renders error message when fetch fails', async () => {
    fetch.mockRejectOnce(new Error('Failed to fetch'));

    render(<TransactionsComponent />);

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch')).toBeInTheDocument();
    });
  });

  test('renders transactions correctly', async () => {
    const mockTransactions = [
      { id: 1, metadata: { product_name: 'Product A', name: 'Transaction 1' }, amount: '$10', date: '2024-04-25' },
      { id: 2, metadata: { product_name: 'Product B', name: 'Transaction 2' }, amount: '$20', date: '2024-04-24' }
    ];

    fetch.mockResponseOnce(JSON.stringify(mockTransactions));

    render(<TransactionsComponent />);

    await waitFor(() => {
      expect(screen.getByText('7 Transactions')).toBeInTheDocument();
      expect(screen.getByText('Product A')).toBeInTheDocument();
      expect(screen.getByText('Product B')).toBeInTheDocument();
    });
  });
});
