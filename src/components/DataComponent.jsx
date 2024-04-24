import { useState, useEffect } from 'react';

function DataComponent() {
  const [userData, setUserData] = useState(null);
  const [walletData, setWalletData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const apiUrl = 'https://fe-task-api.mainstack.io';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await fetch(`${apiUrl}/user`);
      const userData = await userResponse.json();
      setUserData(userData);

      const walletResponse = await fetch(`${apiUrl}/wallet`);
      const walletData = await walletResponse.json();
      setWalletData(walletData);

      const transactionsResponse = await fetch(`${apiUrl}/transactions`);
      const transactionData = await transactionsResponse.json();
      setTransactionData(transactionData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h2>User Data</h2>
      {userData && (
        <pre>{JSON.stringify(userData, null, 2)}</pre>
      )}

      <h2>Wallet Data</h2>
      {walletData && (
        <pre>{JSON.stringify(walletData, null, 2)}</pre>
      )}

      <h2>Transaction Data</h2>
      {transactionData && (
        <pre>{JSON.stringify(transactionData, null, 2)}</pre>
      )}
    </div>
  );
}

export default DataComponent;
