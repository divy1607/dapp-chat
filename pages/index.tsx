import type { NextPage } from 'next';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnect from '../src/app/components/WalletConnect';
import ChatInterface from '../src/app/components/ChatInterface';

function getLibrary(provider: any) {
  return new Web3Provider(provider);
}

const Home: NextPage = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div>
        <h1>Decentralized P2P Chat</h1>
        <WalletConnect />
        <ChatInterface />
      </div>
    </Web3ReactProvider>
  );
};

export default Home;