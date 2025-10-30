# ⚡ Quick Start Guide

## 🎯 What You Have Now

Your project has been set up with:
- ✅ Next.js 16 + TypeScript
- ✅ Tailwind CSS (black/white theme)
- ✅ Firebase (ready to integrate)
- ✅ Basic pages (manufacturer, inspector, verify, about)

## 📦 New Packages Installed

### AI/ML
- `@tensorflow/tfjs` - Run ML models in browser
- `@tensorflow-models/mobilenet` - Pre-trained image classification

### Blockchain
- `@solana/web3.js` - Solana SDK
- `@solana/wallet-adapter-react` - Wallet connection
- `@solana/wallet-adapter-wallets` - Support for Phantom, Solflare, etc.

### UI/UX
- `framer-motion` - Smooth animations
- `recharts` - Beautiful charts
- `reactflow` - Network diagrams
- `lucide-react` - Modern icons

---

## 🚀 Getting Started (5 Minutes)

### Step 1: Install Phantom Wallet
1. Go to https://phantom.app
2. Download Chrome extension
3. Create new wallet
4. **SAVE YOUR SEED PHRASE** (12 words)
5. Switch to **Devnet**:
   - Click gear icon ⚙️
   - Developer Settings → Change Network → Devnet

### Step 2: Get Free Test SOL
1. Copy your wallet address (click address to copy)
2. Go to https://solfaucet.com
3. Paste address
4. Click "Devnet" dropdown
5. Select "1 SOL"
6. Click "Devnet Airdrop"
7. Wait ~5 seconds
8. Check Phantom - you should have 1 SOL!

### Step 3: Test Your Setup
```bash
# Make sure you're in the project directory
cd /Users/manishkarthikvutlapalli/Desktop/ledgerlegends

# Start the dev server
npm run dev
```

Open http://localhost:3000

---

## 📖 What to Read First

### Blockchain Basics (30 minutes)
Read: [BLOCKCHAIN_GUIDE.md](./BLOCKCHAIN_GUIDE.md)

**Key Concepts**:
- What is blockchain (like a permanent notebook)
- How Solana works (fast & cheap)
- Wallets (your digital ID)
- Transactions (actions on blockchain)
- Devnet (free test environment)

### Implementation Plan (15 minutes)
Read: [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md)

**What You'll Build**:
- Phase 1: Core pages + Real AI (Week 1)
- Phase 2: Blockchain integration (Week 2)
- Phase 3: Network visualization (Week 3)
- Phase 4: Polish & optimization (Week 4)

---

## 🎓 Learning Path

### Day 1: Setup & Basics
- [x] Install Phantom wallet
- [x] Get Devnet SOL
- [ ] Read BLOCKCHAIN_GUIDE.md
- [ ] Understand wallet connection
- [ ] Test a simple transaction

### Day 2: Core Pages
- [ ] Update landing page
- [ ] Create dashboard home
- [ ] Add KPI cards
- [ ] Implement charts

### Day 3: Real AI
- [ ] Load TensorFlow.js model
- [ ] Process images
- [ ] Generate quality scores
- [ ] Create heatmaps

### Day 4: Blockchain Basics
- [ ] Connect wallet to app
- [ ] Read wallet balance
- [ ] Submit test transaction
- [ ] View on Solscan

### Day 5: Verification
- [ ] Read blockchain data
- [ ] Verify transactions
- [ ] Create explorer page
- [ ] Test end-to-end

---

## 🛠️ Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Run production build

# Testing
npm run test         # Run tests (add later)
npm run lint         # Check code quality

# Blockchain
# (We'll add these later)
npm run test:wallet      # Test wallet connection
npm run test:submit      # Test transaction
npm run test:verify      # Test verification
```

---

## 📁 Project Structure

```
ledgerlegends/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── about/page.tsx              # About page
│   ├── dashboard/                  # NEW!
│   │   ├── page.tsx                # Dashboard home
│   │   ├── inspect/page.tsx        # New inspection
│   │   └── inspection/[id]/page.tsx # Inspection details
│   ├── network/page.tsx            # NEW! Network viz
│   ├── explorer/page.tsx           # NEW! Blockchain explorer
│   ├── verify/[id]/page.tsx        # Product verify
│   └── manufacturer/page.tsx       # OLD (keep for now)
│
├── components/
│   ├── Navbar.tsx                  # Nav bar
│   ├── WalletButton.tsx            # NEW! Wallet connection
│   ├── NetworkNode.tsx             # NEW! Network node
│   └── InspectionCard.tsx          # NEW! Inspection display
│
├── utils/
│   ├── blockchain.ts               # Crypto utilities
│   ├── solana.ts                   # NEW! Solana functions
│   ├── ai.ts                       # NEW! AI utilities
│   └── firebase.ts                 # Firebase helpers
│
├── types/
│   └── index.ts                    # TypeScript types
│
├── BLOCKCHAIN_GUIDE.md             # Learn blockchain
├── IMPLEMENTATION_PLAN.md          # Step-by-step plan
└── QUICK_START.md                  # This file!
```

---

## 🎯 Your First Task

### Build the New Landing Page (2 hours)

**Goal**: Replace the current generic landing with the new hero design.

**What to Add**:
1. Animated lock icon (pulsing)
2. "AI + Privacy + Blockchain = Trust" tagline
3. Live stats ticker (simulated)
4. 3 CTA buttons with hover effects

**File**: `app/page.tsx`

**Code Skeleton**:
```typescript
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        {/* Animated Lock */}
        <motion.div
          className="text-8xl text-center mb-8"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🔒
        </motion.div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-center mb-6">
          Visual Difference Engine
        </h1>

        {/* Tagline */}
        <p className="text-2xl text-center text-gray-400 mb-12">
          AI + Privacy + Blockchain = Trust
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <Link href="/dashboard" className="btn-primary">
            Try Demo
          </Link>
          <Link href="/network" className="btn-primary">
            View Network
          </Link>
          <Link href="/explorer" className="btn-secondary">
            Explore Blockchain
          </Link>
        </div>
      </section>

      {/* Live Stats Ticker */}
      <section className="bg-white/5 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-around text-center">
            <div>
              <p className="text-3xl font-bold">47,582</p>
              <p className="text-sm text-gray-400">Inspections Today</p>
            </div>
            <div>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-400">Manufacturers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1.8%</p>
              <p className="text-sm text-gray-400">Defect Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Layer Architecture */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="space-y-8">
          {/* Layer 1 */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Layer 1: Edge AI
            </h3>
            <p className="text-gray-400">
              TensorFlow.js analyzes images locally. Your data never leaves your device.
            </p>
          </motion.div>

          {/* Layer 2 */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Layer 2: Federated Learning
            </h3>
            <p className="text-gray-400">
              Multiple manufacturers improve the model together without sharing data.
            </p>
          </motion.div>

          {/* Layer 3 */}
          <motion.div
            className="card"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-2">
              Layer 3: Blockchain
            </h3>
            <p className="text-gray-400">
              Inspection results are stored permanently on Solana for public verification.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
```

**Test**:
1. Save file
2. Refresh http://localhost:3000
3. You should see:
   - Pulsing lock icon
   - New tagline
   - 3 buttons
   - Stats ticker
   - 3 layer cards with hover effect

**Next**: Once this works, move to dashboard home!

---

## 🆘 Troubleshooting

### "Module not found" Error
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### "TensorFlow.js not loading"
- Check browser console for errors
- Make sure you're using HTTPS or localhost
- Try different browser (Chrome recommended)

### "Wallet not connecting"
- Install Phantom wallet
- Switch to Devnet
- Refresh page
- Check browser console

### "Transaction failing"
- Check you have Devnet SOL
- Verify you're on Devnet (not mainnet!)
- Check Solana status: https://status.solana.com

---

## 📞 Getting Help

### Resources
- Solana Discord: https://discord.gg/solana
- TensorFlow.js GitHub: https://github.com/tensorflow/tfjs
- Next.js Discord: https://discord.gg/nextjs

### What to Include When Asking
1. Error message (screenshot or copy-paste)
2. What you were trying to do
3. What you expected to happen
4. Your environment (browser, OS)

---

## 🎉 You're All Set!

You now have:
- ✅ All packages installed
- ✅ Phantom wallet set up
- ✅ Free Devnet SOL
- ✅ Understanding of blockchain basics
- ✅ Clear implementation plan

**Next Steps**:
1. Read BLOCKCHAIN_GUIDE.md (30 min)
2. Update landing page (2 hours)
3. Start Phase 1 of implementation plan

**Let's build something amazing!** 🚀
