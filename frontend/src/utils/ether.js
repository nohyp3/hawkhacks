// src/utils/ethers.js
import { ethers } from 'ethers';

const getEthereumObject = () => window.ethereum;

const getProvider = () => {
  const ethereum = getEthereumObject();
  if (!ethereum) {
    console.error("Ethereum object not found, install MetaMask.");
    return null;
  }
  return new ethers.providers.Web3Provider(ethereum);
};

const getSigner = (provider) => provider.getSigner();

export { getProvider, getSigner };
