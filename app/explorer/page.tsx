'use client';

import { motion } from 'framer-motion';
import { Search, ExternalLink, Clock, CheckCircle, XCircle, Activity, Cpu, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

const mockTransactions = [
  { id: '5Yx7j9K2mN3p', productId: 'PROD-8472', status: 'passed', time: '2 seconds ago', score: 94 },
  { id: '8kL3mP5qR2nT', productId: 'PROD-8471', status: 'failed', time: '5 seconds ago', score: 62 },
  { id: '1aB4cD6eF8gH', productId: 'PROD-8470', status: 'passed', time: '8 seconds ago', score: 91 },
  { id: '9iJ2kL4mN6oP', productId: 'PROD-8469', status: 'passed', time: '12 seconds ago', score: 88 },
  { id: '3qR5sT7uV9wX', productId: 'PROD-8468', status: 'passed', time: '15 seconds ago', score: 96 },
];

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [liveStats, setLiveStats] = useState({
    tps: 2347,
    blockHeight: 280542198,
    gasPrice: 0.000005
  });

  useEffect(() => {
    // Simulate live network stats updating
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        tps: Math.floor(2000 + Math.random() * 500),
        blockHeight: prev.blockHeight + Math.floor(Math.random() * 3),
        gasPrice: 0.000005 + Math.random() * 0.000001
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Matrix Background Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

        {/* Header */}
        <motion.div
          className="text-center mb-12 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
            ⛓️ Blockchain Explorer
          </h1>
          <p className="text-xl text-gray-400">
            Real-time verification of all inspections on Solana Devnet
          </p>

          {/* Live Network Stats */}
          <motion.div
            className="mt-6 inline-flex items-center gap-6 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 font-mono text-sm"
            animate={{ borderColor: ['rgba(6, 182, 212, 0.3)', 'rgba(34, 197, 94, 0.3)', 'rgba(6, 182, 212, 0.3)'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-400">Network: ONLINE</span>
            </div>
            <div className="flex items-center gap-2 border-l border-cyan-500/30 pl-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400">TPS:</span>
              <span className="text-cyan-400 font-bold">{liveStats.tps.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 border-l border-cyan-500/30 pl-6">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">Block:</span>
              <span className="text-purple-400 font-bold">{liveStats.blockHeight.toLocaleString()}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              placeholder="Search by Inspection ID or Transaction Hash..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-black/40 backdrop-blur-sm border-2 border-cyan-500/30 rounded-xl focus:border-cyan-500 focus:outline-none text-lg text-white placeholder-gray-500 font-mono"
            />
          </div>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 relative">
          <motion.div
            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 text-white rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(6, 182, 212, 0.6)' }}
          >
            <p className="text-3xl font-bold text-cyan-400 font-mono">47,582</p>
            <p className="text-cyan-200">Total Inspections</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 text-white rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(168, 85, 247, 0.6)' }}
          >
            <p className="text-3xl font-bold text-purple-400 font-mono">12</p>
            <p className="text-purple-200">Manufacturers</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 text-white rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(34, 197, 94, 0.6)' }}
          >
            <p className="text-3xl font-bold text-green-400 font-mono">98.2%</p>
            <p className="text-green-200">Pass Rate</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 text-white rounded-xl p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 0.6)' }}
          >
            <p className="text-3xl font-bold text-orange-400 font-mono">~400ms</p>
            <p className="text-orange-200">Avg Block Time</p>
          </motion.div>
        </div>

        {/* Live Feed */}
        <motion.div
          className="bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-cyan-400">Live Transaction Feed</h2>
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold font-mono">LIVE</span>
            </div>
          </div>

          <div className="space-y-3">
            {mockTransactions.map((tx, index) => (
              <motion.div
                key={tx.id}
                className="bg-black/60 backdrop-blur-sm hover:bg-black/80 border border-cyan-500/20 hover:border-cyan-500/40 rounded-lg p-4 transition-all cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {tx.status === 'passed' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className="font-mono font-semibold text-cyan-300">{tx.id}...</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold font-mono ${
                        tx.status === 'passed'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {tx.status.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Product: <span className="text-purple-400 font-mono">{tx.productId}</span></span>
                      <span>Score: <span className="text-cyan-400 font-bold">{tx.score}</span>/100</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {tx.time}
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://solscan.io/tx/${tx.id}?cluster=devnet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 text-sm font-semibold"
                  >
                    <span>Solscan</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 border-2 border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 text-cyan-400 font-semibold transition-all font-mono">
            Load More Transactions
          </button>
        </motion.div>

        {/* Network Health */}
        <motion.div
          className="mt-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
            <Activity className="w-6 h-6" />
            Network Health
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-400 mb-1">Solana RPC</p>
              <p className="text-lg font-semibold text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Network</p>
              <p className="text-lg font-semibold text-cyan-400 font-mono">Devnet</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Gas Price</p>
              <p className="text-lg font-semibold text-purple-400 font-mono">{liveStats.gasPrice.toFixed(6)} SOL</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Block Height</p>
              <p className="text-lg font-semibold text-cyan-400 font-mono">{liveStats.blockHeight.toLocaleString()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
