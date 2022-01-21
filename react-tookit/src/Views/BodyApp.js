import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers'
import { useSelector } from 'react-redux';
import Token from '../contracts/Token.sol/Token.json';
const tokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
function BodyApp() {
  const user = useSelector((state) => state.user);
  const [userAccount, setUserAccount] = useState()
  const [amount, setAmount] = useState()

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }
 
  async function getBalance() {
    if (typeof window.ethereum !== 'undefined' && user && user.account  ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, Token.abi, provider)
      try{
        const balance = await contract.balanceOf(user.account);
        console.log(balance.toString());
      }catch(e){
       console.log(e);
      }
    }
  }

  async function sendCoins() {
    if (typeof window.ethereum !== 'undefined'  && user && user.account ) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, Token.abi, signer);
      const transaction = await contract.transfer(userAccount, amount);
      await transaction.wait();
      console.log(`${amount} Coins successfully sent to ${userAccount}`);
    }
  }

  return <div className="container-fluid container-body">
    <button className='btn btn-danger' onClick={getBalance}>Get Balance</button>
    <button className='btn btn-primary' onClick={sendCoins}>Send Coins</button>
    <input onChange={e => setUserAccount(e.target.value)} placeholder="Account ID" />
    <input onChange={e => setAmount(e.target.value)} placeholder="Amount" />
  </div>
}

export default BodyApp;