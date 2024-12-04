import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useWeb3Wallet } from '../src/app/hooks/useWeb3';
import WalletConnect from '../src/app/components/WalletConnect';
import ChatInterface from '../src/app/components/ChatInterface';

const ChatPage: NextPage = () => {
  const { active } = useWeb3Wallet();
  const router = useRouter();

  // Optional: Redirect if not connected
  React.useEffect(() => {
    if (!active) {
      router.push('/');
    }
  }, [active, router]);

  return (
    <div>
      <h1>Decentralized Chat</h1>
      {!active ? (
        <div>
          <p>Please connect your wallet to access chat</p>
          <WalletConnect />
        </div>
      ) : (
        <ChatInterface />
      )}
    </div>
  );
};

export default ChatPage;