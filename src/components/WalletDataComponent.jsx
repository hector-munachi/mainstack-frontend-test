import { useState, useEffect } from 'react';

function WalletDataComponent() {
  const [walletData, setWalletData] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = 'https://fe-task-api.mainstack.io';

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    try {
      const response = await fetch(`${apiUrl}/wallet`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setWalletData(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching wallet data:', error);
    }
  };

  if (error) {
    return <div className="text-red-500 font-bold">{error}</div>;
  }

  return (
    <div className="lg:px-60 sm:px-4 sm:mt-5 md:mt-5">
      {walletData ? (
        <div>
          <div className="mb-8">
            <div className='flex flex-row justify-between'>
              <h3 className="text-sm font-semibold mr-20 text-gray-400">Ledger Balance</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold">USD {walletData.ledger_balance}</h1>
          </div>
          <div className="mb-8">
            <div className='flex flex-row justify-between'>
              <h3 className="text-sm font-semibold mr-20 text-gray-400">Total Payout</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold">USD {walletData.total_payout}</h1>
          </div>
          <div className="mb-8">
            <div className='flex flex-row justify-between'>
              <h3 className="text-sm font-semibold mr-20 text-gray-400">Total Revenue</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold">USD {walletData.total_revenue}</h1>
          </div>
          <div className="mb-8">
            <div className='flex flex-row justify-between'>
              <h3 className="text-sm font-semibold mr-20 text-gray-400">Pending Payout</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
            </div>
            <h1 className="text-lg font-bold">USD {walletData.pending_payout}</h1>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default WalletDataComponent;
