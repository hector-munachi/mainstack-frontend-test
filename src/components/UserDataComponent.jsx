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
    <div className="container">
      <div>
        <div className="p-3">
          {userData ? (
            <div>
              <div className='flex flex-row space-x-2'>
              <div className="inline-block relative rounded-full bg-gray-700 w-10 h-10 flex items-center justify-center mt-1">
                <p className="text-lg text-white font-semibold">OJ</p>
              </div>
              <div>
              <p className="text-lg font-bold">{userData.first_name} {userData.last_name}</p>
              <p className="text-lg font-semibold"></p>
              <p className="text-sm font-semibold">{userData.email}</p>
              </div>
              </div>
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
