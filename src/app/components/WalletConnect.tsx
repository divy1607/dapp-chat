import React from 'react';
import { useWeb3Wallet } from '../hooks/useWeb3';

const WalletConnect: React.FC = () => {
  const { connectWallet, disconnectWallet, account, active } = useWeb3Wallet();

  return (
    <div className="wallet-connect">
      {!active ? (
        <button 
          onClick={connectWallet} 
          className="btn btn-primary"
        >
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected: {account}</p>
          <button 
            onClick={disconnectWallet}
            className="btn btn-secondary"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;