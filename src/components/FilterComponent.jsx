

const FilterComponent = () => {
  return (
    <div className="container p-4">
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Date Range</div>
        <div className="flex space-x-2">
          <input type='date' className="px-2 py-3 rounded-lg bg-gray-200 w-full"/>
          <input type='date' className="px-2 py-3 rounded-lg bg-gray-200 w-full"/>
        </div>
      </div>
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Transaction Type</div>
        <select className="px-2 py-3 rounded-lg bg-gray-200 w-full">
          <option>Select Type</option>
          <option>Store Transactions</option>
          <option>Get Tipped</option>
          <option>Withdrawals</option>
          <option>Chargebacks</option>
        </select>
      </div>
      <div className="mb-5">
        <div className="text-sm font-bold mb-1">Transaction Status</div>
        <select className="px-2 py-3 rounded-lg bg-gray-200 w-full">
          <option>Select Status</option>
          <option>Successful</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>
      <div className="flex space-x-4 mt-52">
        <button className="px-4 py-2 w-full border-gray-200 border-2 rounded-full bg-white text-black">Clear</button>
        <button className="px-4 py-2 w-full rounded-full bg-black text-white">Apply</button>
      </div>
    </div>
  );
};

export default FilterComponent;
