'use client';

import { useState } from 'react';

export default function ManufacturerPage() {
  const [formData, setFormData] = useState({
    productName: '',
    manufacturer: '',
    description: '',
    category: '',
    batchNumber: '',
    manufactureDate: ''
  });

  const [registeredProducts, setRegisteredProducts] = useState<any[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const productId = `PROD-${Date.now()}-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;

    const newProduct = {
      id: productId,
      ...formData,
      createdAt: new Date().toLocaleString(),
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${productId}`
    };

    setRegisteredProducts([newProduct, ...registeredProducts]);
    setShowSuccess(true);

    // Reset form
    setFormData({
      productName: '',
      manufacturer: '',
      description: '',
      category: '',
      batchNumber: '',
      manufactureDate: ''
    });

    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Manufacturer Dashboard</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Registration Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Register New Product</h2>

          {showSuccess && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              ✓ Product registered successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">Product Name</label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="e.g., Industrial Bearing X200"
                value={formData.productName}
                onChange={(e) => setFormData({...formData, productName: e.target.value})}
              />
            </div>

            <div>
              <label className="label">Manufacturer</label>
              <input
                type="text"
                required
                className="input-field"
                placeholder="e.g., Acme Manufacturing"
                value={formData.manufacturer}
                onChange={(e) => setFormData({...formData, manufacturer: e.target.value})}
              />
            </div>

            <div>
              <label className="label">Category</label>
              <select
                required
                className="input-field"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select category...</option>
                <option value="Electronics">Electronics</option>
                <option value="Automotive">Automotive</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Food">Food & Beverage</option>
                <option value="Textiles">Textiles</option>
                <option value="Industrial">Industrial Equipment</option>
              </select>
            </div>

            <div>
              <label className="label">Description</label>
              <textarea
                required
                className="input-field"
                rows={3}
                placeholder="Product description..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Batch Number</label>
                <input
                  type="text"
                  required
                  className="input-field"
                  placeholder="e.g., BATCH-2024-001"
                  value={formData.batchNumber}
                  onChange={(e) => setFormData({...formData, batchNumber: e.target.value})}
                />
              </div>

              <div>
                <label className="label">Manufacture Date</label>
                <input
                  type="date"
                  required
                  className="input-field"
                  value={formData.manufactureDate}
                  onChange={(e) => setFormData({...formData, manufactureDate: e.target.value})}
                />
              </div>
            </div>

            <button type="submit" className="btn-primary w-full text-lg py-3">
              Register Product & Generate QR Code
            </button>
          </form>
        </div>

        {/* Registered Products List */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Registered Products</h2>

          {registeredProducts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="text-6xl mb-4">📦</div>
              <p>No products registered yet</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {registeredProducts.map((product) => (
                <div key={product.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg">{product.productName}</h3>
                      <p className="text-sm text-gray-600">{product.manufacturer}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>

                  <div className="text-sm text-gray-700 mb-3">
                    <p><strong>Product ID:</strong> {product.id}</p>
                    <p><strong>Batch:</strong> {product.batchNumber}</p>
                    <p><strong>Date:</strong> {product.manufactureDate}</p>
                    <p><strong>Registered:</strong> {product.createdAt}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={product.qrCode}
                      alt="QR Code"
                      className="w-24 h-24 border border-gray-300 rounded"
                    />
                    <div className="flex-1">
                      <p className="text-xs text-gray-600 mb-2">Scan to verify product</p>
                      <button className="text-sm text-blue-600 hover:underline">
                        Download QR Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
