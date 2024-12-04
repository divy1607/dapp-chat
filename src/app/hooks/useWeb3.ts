import { useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export function useWeb3Wallet() {
  const { address, isConnected } = useAccount();
  const { connect, error } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  const connectWallet = () => {
    connect();
  };

  const disconnectWallet = () => {
    disconnect();
  };

  return { 
    connectWallet, 
    disconnectWallet, 
    account: address, 
    active: isConnected, 
    error 
  };
}