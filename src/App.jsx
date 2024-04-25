import { useState, useEffect } from 'react';
// import DataComponent from './components/DataComponent'
import MainCard from './components/MainCard';
import Navbar from './components/Navbar';
import TransactionsComponent from './components/TransactionsComponent';

function App() {
  // State variable to hold the current year
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Function to update the current year
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update the year every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <MainCard/>
      <TransactionsComponent/>
      {/* <DataComponent /> */}
      <footer className="font-semibold text-center py-4">
        <p>&copy; {currentYear} code by Hector Munachi</p>
      </footer>
      </div>
    </>
  )
}

export default App
