/* eslint-disable no-undef */

import { render, waitFor } from '@testing-library/react';
import TransactionsComponent from './TransactionsComponent';

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          metadata: {
            product_name: 'Product 1',
            name: 'Transaction 1',
          },
          amount: 100,
          date: '2024-04-25',
        },
        {
          metadata: {
            product_name: 'Product 2',
            name: 'Transaction 2',
          },
          amount: 200,
          date: '2024-04-24',
        },
      ]),
  })
);

describe('TransactionsComponent', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders loading state initially', () => {
    const { getByText } = render(<TransactionsComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders transactions correctly after fetching', async () => {
    const { getByText } = render(<TransactionsComponent />);
    
    // Wait for the component to finish fetching data
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Transaction 1')).toBeInTheDocument();
    expect(getByText('100')).toBeInTheDocument();
    expect(getByText('2024-04-25')).toBeInTheDocument();
    
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('Transaction 2')).toBeInTheDocument();
    expect(getByText('200')).toBeInTheDocument();
    expect(getByText('2024-04-24')).toBeInTheDocument();
  });

  it('displays error message when fetching fails', async () => {
    // Mocking fetch function to simulate error
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));
    
    const { getByText } = render(<TransactionsComponent />);
    
    // Wait for the component to handle the error
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    
    expect(getByText('Error fetching transactions: Fetch failed')).toBeInTheDocument();
  });
});
