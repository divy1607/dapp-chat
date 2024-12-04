import { createPublicClient, createWalletClient, custom, getContract, http } from 'viem';
import { mainnet } from 'viem/chains';

// ABI for your ChatContract
export const ChatContractABI = [
  // Add your contract ABI here
] as const;

export const getContract = (address: `0x${string}`, account?: `0x${string}`) => {
  const publicClient = createPublicClient({
    chain: mainnet,
    transport: http()
  });

  const walletClient = account 
    ? createWalletClient({
        chain: mainnet,
        transport: custom(window.ethereum!)
      }) 
    : undefined;

  return getContract({
    address,
    abi: ChatContractABI,
    publicClient,
    walletClient
  });
};