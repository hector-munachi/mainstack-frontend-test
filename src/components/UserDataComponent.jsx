import { useState, useEffect } from 'react';

function UserDataComponent() {
  const [userData, setUserData] = useState(null);
  const apiUrl = 'https://fe-task-api.mainstack.io';

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch(`${apiUrl}/user`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">User Data</h2>
          {userData ? (
            <div>
              <p className="text-gray-500 text-sm">First Name</p>
              <p className="text-lg font-semibold">{userData.first_name}</p>
              <p className="text-gray-500 text-sm mt-4">Last Name</p>
              <p className="text-lg font-semibold">{userData.last_name}</p>
              <p className="text-gray-500 text-sm mt-4">Email</p>
              <p className="text-lg font-semibold">{userData.email}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDataComponent;
