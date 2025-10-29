import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Blur effects background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-7xl mb-8 animate-pulse">🔒</div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white tracking-tight">
            Integrity Ledger
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
            The Truth Machine for Products
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          <Link href="/manufacturer" className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40">
            <span className="relative z-10">Register Product</span>
          </Link>
          <Link href="/inspector" className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40">
            <span className="relative z-10">Inspect Product</span>
          </Link>
          <Link href="/verify" className="group relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-10 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40">
            <span className="relative z-10">Verify Product</span>
          </Link>
        </div>

        {/* Learn More Link */}
        <div className="mt-16">
          <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-lg font-light">
            Learn more about Integrity Ledger →
          </Link>
        </div>
      </div>
    </div>
  );
}
