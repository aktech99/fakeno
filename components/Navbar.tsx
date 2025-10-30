'use client';

import Link from 'next/link';
import WalletButton from './WalletButton';

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white shadow-2xl border-b border-cyan-500/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity group">
            <span className="text-3xl group-hover:scale-110 transition-transform">🔒</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Visual Difference Engine
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/about"
              className="hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-cyan-400 transition-colors font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/network"
              className="hover:text-purple-400 transition-colors font-medium"
            >
              Network
            </Link>
            <Link
              href="/explorer"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Explorer
            </Link>
            <Link
              href="/verify"
              className="hover:text-cyan-400 transition-colors font-medium"
            >
              Verify
            </Link>

            <WalletButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
