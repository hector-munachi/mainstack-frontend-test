

const FilterComponent = () => {
  return (
    <div className="container p-4">
       <div className="flex items-center justify-center space-x-2">
        {/* Pill-shaped badges */}
        <div className="flex space-x-2 mb-5">
          <span className="px-3 py-1 text-sm font-bold bg-white border-2 border-gray-200 text-gray-900 rounded-full">Today</span>
          <span className="px-3 py-1 text-sm font-bold bg-white border-2 border-gray-200 text-gray-900 rounded-full">Last 7 days</span>
          <span className="px-3 py-1 text-sm font-bold bg-white border-2 border-gray-200 text-gray-900 rounded-full">This month</span>
          <span className="px-3 py-1 text-sm font-bold bg-white border-2 border-gray-200 text-gray-900 rounded-full">Last 3 months</span>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Date Range</div>
        <div className="flex space-x-2">
          <input type='date' className="px-2 py-3 rounded-lg bg-gray-100 w-full"/>
          <input type='date' className="px-2 py-3 rounded-lg bg-gray-100 w-full"/>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Transaction Type</div>
        <select className="px-2 py-3 rounded-lg bg-gray-100 w-full">
          <option>Select Type</option>
          <option>Store Transactions</option>
          <option>Get Tipped</option>
          <option>Withdrawals</option>
          <option>Chargebacks</option>
        </select>
      </div>
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Transaction Status</div>
        <select className="px-2 py-3 rounded-lg bg-gray-100 w-full">
          <option>Select Status</option>
          <option>Successful</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>
      <div className="flex space-x-4 mt-52">
        <button className="px-4 py-2 w-full border-gray-200 border-2 rounded-full text-sm font-bold bg-white text-black">Clear</button>
        <button className="px-4 py-2 w-full rounded-full bg-black text-white">Apply</button>
      </div>
    </div>
  );
};

export default FilterComponent;
