'use client';

import { useState, useEffect } from 'react';
import { Wallet, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WalletButton() {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [isConnecting, setIsConnecting] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Check if Phantom wallet is installed
  const isPhantomInstalled = typeof window !== 'undefined' && (window as any).solana?.isPhantom;

  const connectWallet = async () => {
    if (!isPhantomInstalled) {
      window.open('https://phantom.app/', '_blank');
      return;
    }

    try {
      setIsConnecting(true);
      const { solana } = window as any;
      const response = await solana.connect();
      const pubKey = response.publicKey.toString();

      // Shorten address for display
      const shortened = `${pubKey.slice(0, 4)}...${pubKey.slice(-4)}`;
      setAddress(shortened);

      // Simulate balance check (in real app, query Solana RPC)
      setBalance(Math.random() * 10);

      // Store in localStorage
      localStorage.setItem('walletAddress', pubKey);
    } catch (error) {
      console.error('Wallet connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
    setBalance(0);
    setShowDropdown(false);
    localStorage.removeItem('walletAddress');

    if (isPhantomInstalled) {
      const { solana } = window as any;
      solana.disconnect();
    }
  };

  // Check for previously connected wallet
  useEffect(() => {
    if (isPhantomInstalled) {
      const { solana } = window as any;
      solana.on('connect', (publicKey: any) => {
        const pubKey = publicKey.toString();
        const shortened = `${pubKey.slice(0, 4)}...${pubKey.slice(-4)}`;
        setAddress(shortened);
        setBalance(Math.random() * 10);
      });

      // Auto-connect if previously connected
      if (solana.isConnected) {
        solana.connect({ onlyIfTrusted: true });
      }
    }
  }, [isPhantomInstalled]);

  if (!address) {
    return (
      <motion.button
        onClick={connectWallet}
        disabled={isConnecting}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed border border-purple-400/30"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Wallet className="w-4 h-4" />
        {isConnecting ? 'Connecting...' : isPhantomInstalled ? 'Connect Wallet' : 'Install Phantom'}
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-sm border border-cyan-400/40 rounded-lg hover:border-cyan-400/60 transition-all duration-300 group"
        whileHover={{ scale: 1.02 }}
      >
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="flex flex-col items-start">
          <span className="text-xs text-gray-400">Phantom</span>
          <span className="text-sm font-mono text-cyan-300">{address}</span>
        </div>
        <div className="text-xs text-gray-400 border-l border-gray-600 pl-3">
          <span className="text-cyan-400 font-bold">{balance.toFixed(2)}</span> SOL
        </div>
      </motion.button>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-cyan-400/30 rounded-lg shadow-2xl overflow-hidden z-50"
          >
            <div className="p-4 border-b border-cyan-400/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Wallet Address</span>
                <a
                  href={`https://solscan.io/account/${address}?cluster=devnet`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="font-mono text-xs text-cyan-300 break-all">
                {address}
              </div>
            </div>

            <div className="p-4 border-b border-cyan-400/20">
              <div className="text-sm text-gray-400 mb-1">Balance</div>
              <div className="text-2xl font-bold text-cyan-300">
                {balance.toFixed(4)} <span className="text-sm text-gray-400">SOL</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Devnet</div>
            </div>

            <div className="p-2">
              <button
                onClick={disconnectWallet}
                className="w-full px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded transition-colors duration-200"
              >
                Disconnect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
