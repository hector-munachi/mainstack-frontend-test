import { useState, useEffect } from 'react';

// Graph Component
const Graph = () => (
  <div>
    <img src="/line-graph.png" alt="Curved Line" className="w-full h-full object-cover" />
    <div className="relative">
      <hr className="border border-gray-400 w-full mt-3" />
      <div className="absolute left-0">
        <div className="flex items-center">
          <span className="ml-2 text-xs">Apr 1, 2022</span>
        </div>
      </div>
      <div className="absolute right-0">
        <div className="flex items-center">
          <span className="mr-2 text-xs">Apr 30, 2022</span>
        </div>
      </div>
    </div>
  </div>
);

// Header with Button Component
const HeaderWithButton = () => {
  const [walletData, setWalletData] = useState(null);
  const apiUrl = 'https://fe-task-api.mainstack.io';

  useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchWalletData = async () => {
    try {
      const response = await fetch(`${apiUrl}/wallet`);
      const data = await response.json();
      setWalletData(data);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
    }
  };

  
 return (
  
  <div className="flex justify-between items-center px-4 py-2 bg-white mb-5">
    <div>
     { walletData && (
        <div className="mb-2">
        <div className='flex flex-row justify-between'>
        <h3 className="text-xs font-semibold mr-2 text-gray-400">Available Balance</h3>
        </div>
        <h1 className="text-2xl font-bold">USD {walletData.balance}</h1>
      </div>
     )}
    </div>
    <button className="bg-black text-white px-4 py-2 rounded-full">Withdraw</button>
  </div>
)
};


// Card Component
const MainCard = () => {
  
  return (
  <div className="max-w-md mx-auto bg-white">
    <HeaderWithButton />
    <Graph />
  </div>
);
}



export default MainCard;
