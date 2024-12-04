import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
import io from 'socket.io-client';
import { useWeb3Wallet } from '../hooks/useWeb3';

const ChatInterface: React.FC = () => {
  const { account, active } = useWeb3Wallet();
  const [peer, setPeer] = useState<Peer | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (active) {
      const newPeer = new Peer(account?.toLowerCase());
      setPeer(newPeer);

      const socket = io('http://localhost:3001');
      socket.emit('join', account);

      return () => {
        newPeer.destroy();
        socket.disconnect();
      };
    }
  }, [active, account]);

  const sendMessage = () => {
    if (peer && currentMessage) {
      // Implement peer-to-peer message sending logic
      setMessages([...messages, `You: ${currentMessage}`]);
      setCurrentMessage('');
    }
  };

  if (!active) return <p>Connect wallet to chat</p>;

  return (
    <div>
      <div>
        {messages.map((msg, idx) => (
          <div key={idx}>{msg}</div>
        ))}
      </div>
      <input 
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatInterface;