import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black/80 backdrop-blur-md text-white shadow-2xl border-b border-white/10 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-3xl">🔒</span>
            <span>Integrity Ledger</span>
          </Link>

          <div className="flex gap-8">
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/manufacturer"
              className="hover:text-gray-300 transition-colors font-medium"
            >
              Manufacturer
            </Link>
            <Link
              href="/inspector"
              className="hover:text-gray-300 transition-colors font-medium"
            >
              Inspector
            </Link>
            <Link
              href="/verify"
              className="hover:text-gray-300 transition-colors font-medium"
            >
              Verify
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
