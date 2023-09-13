import React from 'react'
import { useState , useEffect } from 'react';
import {Link} from "react-router-dom";

const ConnectWallet = () => {
    const [walletAddress, setWalletAddress] = useState("");
    // const [web3Instance, setWeb3Instance] = useState(null);
    // const [balance, setBalance] = useState('');
  
    useEffect(() => {
      getCurrentWalletConnected();
      addWalletListener();
    }, []);
    const connectWallet = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          /* MetaMask is installed */
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        } catch (err) {
          console.error(err.message);
        }
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };
  
    const getCurrentWalletConnected = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        try {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
            console.log(accounts[0]);
          } else {
            console.log("Connect to MetaMask using the Connect button");
          }
        } catch (err) {
          console.error(err.message);
        }
      } else {
        /* MetaMask is not installed */
        console.log("Please install MetaMask");
      }
    };
  
    const addWalletListener = async () => {
      if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
        window.ethereum.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0]);
          console.log(accounts[0]);
        });
      } else {
        /* MetaMask is not installed */
        setWalletAddress("");
        console.log("Please install MetaMask");
      }
    };
    return (
      <div>
        <div clasname="header-content">
          <Link className="btn btn-text" onClick={connectWallet}>
            {
              (walletAddress && walletAddress.length > 0) ? `Connected: ${walletAddress.substring(0, 6)}...${walletAddress.substring(38)}` : "Connect Wallet"
            }
          </Link> 
        </div>
      </div>
    )
  
}

export default ConnectWallet