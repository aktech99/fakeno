'use client';

import { useState } from 'react';

export default function VerifyPage() {
  const [productId, setProductId] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [productData, setProductData] = useState<any>(null);

  const handleVerify = () => {
    if (!productId) return;

    setVerifying(true);

    // Simulate verification
    setTimeout(() => {
      const mockProduct = {
        id: productId,
        name: 'Industrial Bearing X200',
        manufacturer: 'Acme Manufacturing',
        description: 'High-precision industrial bearing for heavy machinery',
        category: 'Industrial Equipment',
        batchNumber: 'BATCH-2024-001',
        manufactureDate: '2024-01-15',
        registeredDate: '2024-01-15 10:30:00',
        isAuthentic: true,
        blockchainHash: '0x' + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
        inspections: [
          {
            id: 'INSP-001',
            inspector: 'John Smith',
            date: '2024-01-16 14:20:00',
            status: 'passed',
            result: 'No defects detected. Product meets quality standards.',
            imageUrl: 'https://via.placeholder.com/200x200/4ade80/ffffff?text=PASSED'
          },
          {
            id: 'INSP-002',
            inspector: 'Sarah Johnson',
            date: '2024-01-18 09:15:00',
            status: 'passed',
            result: 'Secondary inspection completed. All parameters within acceptable range.',
            imageUrl: 'https://via.placeholder.com/200x200/4ade80/ffffff?text=PASSED'
          }
        ]
      };

      setProductData(mockProduct);
      setVerifying(false);
    }, 1500);
  };

  const reset = () => {
    setProductId('');
    setProductData(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Verify Product Authenticity</h1>

      {/* Search Section */}
      <div className="card max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Enter Product ID or Scan QR Code</h2>

        <div className="flex gap-4">
          <input
            type="text"
            className="input-field flex-1"
            placeholder="e.g., PROD-1234567890-ABC12"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleVerify()}
          />
          <button
            onClick={handleVerify}
            disabled={!productId || verifying}
            className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {verifying ? 'Verifying...' : 'Verify'}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-3">Or scan QR code</p>
          <button className="btn-secondary">
            📷 Open Camera Scanner
          </button>
        </div>
      </div>

      {/* Product Details */}
      {productData && (
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Authenticity Badge */}
          <div className={`card text-center ${
            productData.isAuthentic ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
          }`}>
            <div className="text-6xl mb-4">
              {productData.isAuthentic ? '✓' : '✗'}
            </div>
            <h2 className="text-3xl font-bold mb-2">
              {productData.isAuthentic ? 'Authentic Product' : 'Product Not Found'}
            </h2>
            <p className="text-gray-700">
              {productData.isAuthentic
                ? 'This product is verified on the blockchain'
                : 'Warning: This product could not be verified'}
            </p>
          </div>

          {/* Product Information */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Product Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Product Name</p>
                <p className="font-semibold text-lg">{productData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Manufacturer</p>
                <p className="font-semibold text-lg">{productData.manufacturer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold">{productData.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Batch Number</p>
                <p className="font-semibold">{productData.batchNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Manufacture Date</p>
                <p className="font-semibold">{productData.manufactureDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Registered Date</p>
                <p className="font-semibold">{productData.registeredDate}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">Description</p>
              <p className="text-gray-800">{productData.description}</p>
            </div>
          </div>

          {/* Blockchain Verification */}
          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-blue-900">🔒 Blockchain Verification</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <div>
                  <p className="font-semibold">Cryptographic Hash Verified</p>
                  <p className="text-xs text-gray-600 font-mono break-all">{productData.blockchainHash}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="font-semibold">Timestamp Cannot Be Altered</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <p className="font-semibold">Immutable Audit Trail Confirmed</p>
              </div>
            </div>
          </div>

          {/* Quality Inspection History */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Inspection History</h3>
            <p className="text-gray-600 mb-4">
              Total Inspections: <span className="font-bold">{productData.inspections.length}</span>
            </p>

            <div className="space-y-4">
              {productData.inspections.map((inspection: any) => (
                <div key={inspection.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <img
                      src={inspection.imageUrl}
                      alt="Inspection"
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-bold">{inspection.id}</p>
                          <p className="text-sm text-gray-600">Inspector: {inspection.inspector}</p>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          inspection.status === 'passed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {inspection.status.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{inspection.result}</p>
                      <p className="text-xs text-gray-500">{inspection.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button onClick={reset} className="btn-secondary">
              Verify Another Product
            </button>
            <button className="btn-primary">
              Download Full Report
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!productData && !verifying && (
        <div className="text-center py-16 text-gray-500">
          <div className="text-8xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold mb-2">Enter a Product ID to Verify</h3>
          <p>Scan the QR code on your product or enter the Product ID manually</p>
        </div>
      )}
      </div>
    </div>
  );
}
