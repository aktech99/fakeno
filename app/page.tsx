'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Zap, Lock, Terminal, Code, Cpu, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [solanaStats, setSolanaStats] = useState({ tps: 0, blockHeight: 0 });

  useEffect(() => {
    // Cyber terminal animation
    const lines = [
      '> Initializing Visual Difference Engine...',
      '> Loading TensorFlow.js runtime...',
      '> Connecting to Solana Devnet...',
      '> RPC: https://api.devnet.solana.com',
      '> Wallet adapter: READY',
      '> AI Model: MobileNet v2.1.0',
      '> Smart Contract: Rust + Anchor Framework',
      '> Status: ONLINE',
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < lines.length) {
        setTerminalLines(prev => [...prev, lines[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 400);

    // Simulate real-time Solana network stats
    const statsInterval = setInterval(() => {
      setSolanaStats({
        tps: Math.floor(2000 + Math.random() * 500),
        blockHeight: 280000000 + Math.floor(Math.random() * 1000)
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(statsInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Matrix-style background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Blur effects background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 text-center">
        {/* Animated Lock */}
        <motion.div
          className="text-8xl mb-8 inline-block"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        >
          🔒
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Visual Difference Engine
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-400 mb-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          AI + Privacy + Blockchain = Trust
        </motion.p>

        <motion.p
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Solving the $8 trillion counterfeit problem with collaborative AI and blockchain verification
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-6 flex-wrap mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            href="/dashboard"
            className="group relative bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
          >
            Try Demo
          </Link>
          <Link
            href="/network"
            className="group relative bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
          >
            View Network
          </Link>
          <Link
            href="/explorer"
            className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
          >
            Explore Blockchain
          </Link>
        </motion.div>

        {/* Cyber Terminal */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 bg-black/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 font-mono text-sm shadow-2xl shadow-cyan-500/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/30 pb-2">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-bold">SYSTEM STATUS</span>
            <span className="ml-auto text-green-400 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              ONLINE
            </span>
          </div>
          <div className="space-y-1">
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-green-400"
              >
                {line}
              </motion.div>
            ))}
            {terminalLines.length === 8 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 pt-4 border-t border-cyan-500/30 grid grid-cols-2 gap-4 text-cyan-300"
              >
                <div>
                  <div className="text-xs text-gray-500">SOLANA TPS</div>
                  <div className="text-2xl font-bold text-cyan-400">{solanaStats.tps.toLocaleString()}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">BLOCK HEIGHT</div>
                  <div className="text-xl font-bold text-cyan-400">{solanaStats.blockHeight.toLocaleString()}</div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Live Stats Ticker */}
      <section className="relative bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 backdrop-blur-md py-8 border-y border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                47,582
              </p>
              <p className="text-sm text-gray-400 mt-2">Inspections Today</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                12
              </p>
              <p className="text-sm text-gray-400 mt-2">Active Manufacturers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                1.8%
              </p>
              <p className="text-sm text-gray-400 mt-2">Defect Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Layer Architecture */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Layer 1 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤖</div>
            <h3 className="text-2xl font-bold mb-4">Layer 1: Edge AI</h3>
            <p className="text-gray-400 mb-4">
              TensorFlow.js analyzes images locally in your browser. Your sensitive data never leaves your device.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Shield className="w-4 h-4" />
              <span>Privacy Preserved</span>
            </div>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🤝</div>
            <h3 className="text-2xl font-bold mb-4">Layer 2: Federated Learning</h3>
            <p className="text-gray-400 mb-4">
              Multiple manufacturers improve the AI model together without ever sharing raw data.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-400">
              <Zap className="w-4 h-4" />
              <span>Collaborative & Secure</span>
            </div>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-green-500/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">⛓️</div>
            <h3 className="text-2xl font-bold mb-4">Layer 3: Blockchain</h3>
            <p className="text-gray-400 mb-4">
              Inspection results are permanently stored on Solana for public verification and trust.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-400">
              <Lock className="w-4 h-4" />
              <span>Immutable & Transparent</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Showcase - Rust/Go/Solana */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Code className="inline w-12 h-12 mr-3 text-cyan-400" />
          Built with Web3 Tech
        </motion.h2>
        <motion.p
          className="text-center text-gray-400 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Real blockchain smart contracts, high-performance backends, and decentralized infrastructure
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Rust Smart Contract */}
          <motion.div
            className="bg-black/60 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 font-mono text-sm hover:border-orange-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-orange-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                smart-contract.rs
              </span>
            </div>
            <pre className="text-orange-300 overflow-x-auto">
{`// Solana Program (Rust + Anchor)
use anchor_lang::prelude::*;

#[program]
pub mod quality_ledger {
    use super::*;

    pub fn record_inspection(
        ctx: Context<RecordInspection>,
        product_id: String,
        quality_score: u8,
        ai_hash: [u8; 32],
    ) -> Result<()> {
        let inspection = &mut ctx.accounts.inspection;
        inspection.product_id = product_id;
        inspection.quality_score = quality_score;
        inspection.ai_model_hash = ai_hash;
        inspection.timestamp = Clock::get()?.unix_timestamp;
        inspection.inspector = ctx.accounts.signer.key();

        emit!(InspectionEvent {
            product_id: inspection.product_id.clone(),
            passed: quality_score >= 75,
        });

        Ok(())
    }
}`}
            </pre>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">Rust</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Anchor Framework</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">Solana</span>
            </div>
          </motion.div>

          {/* Go Backend API */}
          <motion.div
            className="bg-black/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 font-mono text-sm hover:border-cyan-500/50 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-auto text-cyan-400 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                federated-node.go
              </span>
            </div>
            <pre className="text-cyan-300 overflow-x-auto">
{`// Federated Learning Coordinator (Go)
package main

import (
    "github.com/gin-gonic/gin"
    "github.com/solana/web3"
)

type ModelUpdate struct {
    NodeID      string    \`json:"node_id"\`
    Weights     []float64 \`json:"weights"\`
    DatasetSize int       \`json:"dataset_size"\`
    Signature   []byte    \`json:"signature"\`
}

func aggregateModels(c *gin.Context) {
    var updates []ModelUpdate
    c.BindJSON(&updates)

    // Federated averaging
    avgWeights := federatedAverage(updates)

    // Verify on Solana
    tx := submitToBlockchain(avgWeights)

    c.JSON(200, gin.H{
        "new_model": avgWeights,
        "tx_hash":   tx.Signature,
        "nodes":     len(updates),
    })
}`}
            </pre>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">Go</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Gin Framework</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">Web3</span>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-6 py-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-orange-300 font-mono text-sm flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            Rust + Anchor
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 font-mono text-sm flex items-center gap-2">
            <Globe className="w-4 h-4" />
            Go + Gin
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-mono text-sm flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Solana Web3.js
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-300 font-mono text-sm">
            TensorFlow.js
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-300 font-mono text-sm">
            Next.js 16
          </div>
        </motion.div>
      </section>

      {/* Problem Statement */}
      <section className="relative container mx-auto px-4 py-20">
        <motion.div
          className="max-w-4xl mx-auto bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-500/20 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">The $8 Trillion Problem</h2>
          <p className="text-lg text-gray-300 mb-6">
            Companies lose <span className="font-bold text-red-400 text-2xl">$8 trillion every year</span> due to:
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">•</span>
              <span>Fake and counterfeit products flooding the market</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">•</span>
              <span>Manufacturing defects that go unnoticed until it's too late</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">•</span>
              <span>No way to prove when quality checks actually happened</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">•</span>
              <span>Companies can't trust each other's quality data</span>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-4 py-20 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your Supply Chain?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the fight against counterfeits with AI-powered quality assurance and blockchain verification.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 shadow-2xl"
            >
              Get Started Now
            </Link>
            <Link
              href="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
