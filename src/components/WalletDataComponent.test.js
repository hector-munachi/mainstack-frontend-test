/* eslint-disable no-undef */

import { render, waitFor } from '@testing-library/react';
import WalletDataComponent from './WalletDataComponent';

// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        ledger_balance: 500,
        total_payout: 1000,
        total_revenue: 1500,
        pending_payout: 200,
      }),
  })
);

describe('WalletDataComponent', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders loading state initially', () => {
    const { getByText } = render(<WalletDataComponent />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders wallet data correctly after fetching', async () => {
    const { getByText } = render(<WalletDataComponent />);
    
    // Wait for the component to finish fetching data
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    expect(getByText('Ledger Balance')).toBeInTheDocument();
    expect(getByText('Total Payout')).toBeInTheDocument();
    expect(getByText('Total Revenue')).toBeInTheDocument();
    expect(getByText('Pending Payout')).toBeInTheDocument();
    
    expect(getByText('USD 500')).toBeInTheDocument();
    expect(getByText('USD 1000')).toBeInTheDocument();
    expect(getByText('USD 1500')).toBeInTheDocument();
    expect(getByText('USD 200')).toBeInTheDocument();
  });

  it('displays error message when fetching fails', async () => {
    // Mocking fetch function to simulate error
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));
    
    const { getByText } = render(<WalletDataComponent />);
    
    // Wait for the component to handle the error
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    
    expect(getByText('Error fetching wallet data: Fetch failed')).toBeInTheDocument();
  });
});
