export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Integrity Ledger</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            A blockchain-powered solution to the $8 trillion counterfeit problem
          </p>
        </div>

        {/* The Problem Section */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-6 text-red-400">The Problem</h2>
            <p className="text-xl text-gray-300 mb-6">
              Companies lose <span className="font-bold text-red-400">$8 trillion every year</span> due to:
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg">Fake and counterfeit products flooding the market</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg">Manufacturing defects that go unnoticed until it's too late</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg">No way to prove when quality checks actually happened</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-xl">•</span>
                <span className="text-lg">Companies can't trust each other's quality data</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Solution: The Truth Machine</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-6">📦</div>
              <h3 className="text-2xl font-bold mb-4">Track Every Product's Journey</h3>
              <p className="text-gray-400 mb-4">
                When a manufacturer makes a product, they register it in the system. The product gets a unique ID and QR code.
              </p>
              <p className="text-gray-400 mb-4">
                Every detail is recorded and can never be changed thanks to blockchain technology.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-500 font-light">Like a permanent birth certificate for products</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Quality Checks</h3>
              <p className="text-gray-400 mb-4">
                Inspectors take photos of products and AI automatically detects defects like cracks, scratches, or problems.
              </p>
              <p className="text-gray-400 mb-4">
                Results are saved with a timestamp that can't be faked. Everyone can see when and how the product was checked.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-500 font-light">Automated defect detection with unforgeable proof</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-5xl mb-6">✅</div>
              <h3 className="text-2xl font-bold mb-4">Anyone Can Verify Authenticity</h3>
              <p className="text-gray-400 mb-4">
                Consumers scan the QR code on the product to see the complete history: who made it, all quality checks, and any problems found.
              </p>
              <p className="text-gray-400 mb-4">
                All records are cryptographically proven using blockchain - impossible to fake.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-gray-500 font-light">Know if the product is genuine and safe</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold border border-white/20">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Manufacturer Registration</h4>
                  <p className="text-gray-400">
                    Products are registered with unique IDs and immutable blockchain records. Each product gets a QR code for easy tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold border border-white/20">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Quality Inspection</h4>
                  <p className="text-gray-400">
                    AI-powered defect detection analyzes product images. Results are cryptographically signed with unforgeable timestamps.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl font-bold border border-white/20">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Consumer Verification</h4>
                  <p className="text-gray-400">
                    Anyone can verify authenticity by scanning the QR code. View complete product history and all quality inspections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blockchain Technology */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-6">🔒 Blockchain-Powered Security</h2>
            <p className="text-gray-400 text-lg mb-6">
              Every record in Integrity Ledger is secured using blockchain technology:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Immutable Records</h4>
                  <p className="text-gray-500 text-sm">Once data is written, it cannot be changed or deleted</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Cryptographic Hashing</h4>
                  <p className="text-gray-500 text-sm">SHA-256 encryption ensures data integrity</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Timestamp Proof</h4>
                  <p className="text-gray-500 text-sm">Every action is time-stamped and verified</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 text-2xl">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Transparent Audit Trail</h4>
                  <p className="text-gray-500 text-sm">Complete history visible to all stakeholders</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Supply Chain?</h2>
            <p className="text-gray-400 text-lg mb-8">
              Start using Integrity Ledger today and join the fight against counterfeits
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="/manufacturer" className="bg-white text-black font-bold text-lg px-10 py-4 rounded-lg hover:bg-gray-200 transition-colors">
                Get Started
              </a>
              <a href="/" className="bg-white/10 backdrop-blur-sm text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
