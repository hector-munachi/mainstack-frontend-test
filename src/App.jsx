
import './App.css'
// import DataComponent from './components/DataComponent'
import MainCard from './components/MainCard'
import Navbar from './components/Navbar'
import TransactionsComponent from './components/TransactionsComponent'
import UserDataComponent from './components/UserDataComponent'
import WalletDataComponent from './components/WalletDataComponent'

function App() {

  return (
    <>
      <div>
      <Navbar />
      <MainCard/>
        <WalletDataComponent/>
        <TransactionsComponent/>
        <UserDataComponent/>
      {/* <DataComponent /> */}
      </div>
    </>
  )
}

export default App
