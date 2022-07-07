import logo from './logo.svg';
//import './App.css';
import Web3 from 'web3';
import { useState,useEffect } from 'react';

function App() {

  const [account, setaccount] = useState();
  const [balance, setbalance] = useState();
  const [network, setnetwork] = useState()
 
  useEffect(() => {
    
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    const loadAcc = async() => {
       
        const accounts =await web3.eth.requestAccounts();
        setaccount(accounts[0]);
    }

    const getBalance =async()=>{
      const network=await web3.eth.net.getNetworkType(account);
      const balance=await web3.eth.getBalance(account);
      setbalance((balance/1e18).toFixed(4))
      setnetwork(network)
    }

    loadAcc();
    getBalance();
  }, [account])
  

  let name="chan"
  return (
    <div className="App">
      <header className="App-header">
        <p> Your Account {account}</p>
        <p>Balance {balance}</p>
        <p>Network : {network}</p>
        <button >Connect</button>
      </header>
    </div>
  );
}

export default App;
