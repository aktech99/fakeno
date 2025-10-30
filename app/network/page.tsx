'use client';

import { motion } from 'framer-motion';
import { Users, Shield, TrendingUp, Zap } from 'lucide-react';

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-black text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            🌐 Live Federated Learning Network
          </h1>
          <p className="text-xl text-gray-400">
            Round #47 - 12 Active Participants
          </p>
        </motion.div>

        {/* Network Visualization Placeholder */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center py-20">
            <div className="relative w-64 h-64 mx-auto mb-8">
              {/* Central Node */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(147, 51, 234, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2
                }}
              >
                <Zap className="w-10 h-10" />
              </motion.div>

              {/* Surrounding Nodes */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
                const angle = (i * 360) / 8;
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.2
                    }}
                  >
                    <Users className="w-6 h-6" />
                  </motion.div>
                );
              })}
            </div>

            <h2 className="text-3xl font-bold mb-4">Federated Learning in Progress</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Multiple manufacturers are collaboratively training the AI model without sharing raw data.
              Privacy preserved through federated learning.
            </p>
          </div>
        </motion.div>

        {/* Training Progress */}
        <motion.div
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6">Training Progress by Participant</h2>

          <div className="space-y-4">
            {[
              { name: 'PharmaCorp', progress: 95 },
              { name: 'TechManufacturing', progress: 88 },
              { name: 'AutoParts Inc', progress: 92 },
              { name: 'Electronics Ltd', progress: 85 },
              { name: 'Food Safety Co', progress: 90 },
            ].map((participant, index) => (
              <motion.div
                key={participant.name}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{participant.name}</span>
                  <span className="text-sm text-gray-400">{participant.progress}%</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${participant.progress}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <TrendingUp className="w-8 h-8 text-green-400 mb-2" />
            <p className="text-3xl font-bold">94.2%</p>
            <p className="text-sm text-gray-400">Model Accuracy</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Shield className="w-8 h-8 text-blue-400 mb-2" />
            <p className="text-3xl font-bold">100%</p>
            <p className="text-sm text-gray-400">Privacy Preserved</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
          >
            <Users className="w-8 h-8 text-purple-400 mb-2" />
            <p className="text-3xl font-bold">12</p>
            <p className="text-sm text-gray-400">Active Nodes</p>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Zap className="w-8 h-8 text-yellow-400 mb-2" />
            <p className="text-3xl font-bold">47</p>
            <p className="text-sm text-gray-400">Training Rounds</p>
          </motion.div>
        </div>

        {/* Privacy Explainer */}
        <motion.div
          className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-start gap-4">
            <Shield className="w-12 h-12 text-green-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-3">Your Data Never Leaves Your Site</h3>
              <p className="text-gray-300 mb-4">
                Federated learning allows multiple organizations to collaboratively train a shared AI model
                while keeping their data private. Only model updates are shared, never raw data.
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Data stays on your servers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Only encrypted model updates are shared</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Everyone benefits from improved AI</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
