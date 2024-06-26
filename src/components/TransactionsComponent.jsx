import { useState, useEffect } from 'react';
import FilterComponent from './FilterComponent';

function TransactionsComponent() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const apiUrl = 'https://fe-task-api.mainstack.io';

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetch(`${apiUrl}/transactions`);
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.error('Error fetching transactions:', error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 font-bold">{error}</div>;
  }

  return (
    <div className="container mt-5 mb-10">
      <div className='flex flex-col justify-between sm:flex-row'>
        <div className="mb-4 sm:mb-0">
          <h2 className="text-lg font-bold mt-5">7 Transactions</h2>
          <h3 className="text-xs font-semibold mr-2 text-gray-400">Your transactions for the last 7 days</h3>
        </div>
        <div className='flex flex-row space-x-1'>
          <button onClick={toggleSidebar} className="flex items-center justify-center px-4 py-1 bg-gray-200 text-black text-sm rounded-full">
            <span className="mr-2">Filter</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
          <button className="flex items-center justify-center px-4 py-1 bg-gray-200 text-black text-sm rounded-full">
            <span className="mr-2">Export List</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="border border-gray-200 w-full mt-3" />
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className='flex flex-row justify-center'>
          <h2 className="text-lg font-bold absolute top-0 left-0 p-3">Filter</h2>
          <button onClick={toggleSidebar} className="close-btn absolute top-0 right-0 p-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {/* Your sidebar content goes here */}
        <FilterComponent />
      </div>
      <div className="table-container overflow-x-auto mt-4">
        <table className="min-w-full">
          <tbody className="bg-white">
            {transactions.map((transaction, index) => (
              <tr key={index} className='bg-white'>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{transaction.metadata?.product_name}</div>
                      <div className="text-xs text-gray-500">{transaction.metadata?.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-bold">{transaction.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionsComponent;
