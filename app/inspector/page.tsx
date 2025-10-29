'use client';

import { useState } from 'react';

export default function InspectorPage() {
  const [productId, setProductId] = useState('');
  const [inspectorName, setInspectorName] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [inspectionResult, setInspectionResult] = useState<any>(null);
  const [inspections, setInspections] = useState<any[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInspection = () => {
    if (!productId || !inspectorName || !selectedImage) return;

    setAnalyzing(true);

    // Simulate AI analysis
    setTimeout(() => {
      const defectsDetected = Math.random() > 0.5;
      const result = {
        id: `INSP-${Date.now()}`,
        productId,
        inspectorName,
        imageUrl: selectedImage,
        timestamp: new Date().toLocaleString(),
        defectsDetected,
        status: defectsDetected ? 'failed' : 'passed',
        aiAnalysis: defectsDetected
          ? 'AI detected: Surface scratches (confidence: 87%), Minor dents (confidence: 72%)'
          : 'No defects detected. Product meets quality standards.',
        defectDetails: defectsDetected
          ? 'Multiple surface imperfections detected on the left side of the product.'
          : ''
      };

      setInspectionResult(result);
      setInspections([result, ...inspections]);
      setAnalyzing(false);
    }, 2000);
  };

  const resetForm = () => {
    setProductId('');
    setInspectorName('');
    setSelectedImage(null);
    setInspectionResult(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Quality Inspection Interface</h1>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Inspection Form */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">New Inspection</h2>

          <div className="space-y-4">
            <div>
              <label className="label">Product ID</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g., PROD-1234567890-ABC12"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>

            <div>
              <label className="label">Inspector Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Your name"
                value={inspectorName}
                onChange={(e) => setInspectorName(e.target.value)}
              />
            </div>

            <div>
              <label className="label">Upload Product Image</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                {selectedImage ? (
                  <div>
                    <img
                      src={selectedImage}
                      alt="Selected product"
                      className="max-h-64 mx-auto rounded mb-4"
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove image
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-6xl mb-4">📸</div>
                    <p className="text-gray-600 mb-2">Click to upload product image</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                {!selectedImage && (
                  <label htmlFor="image-upload" className="btn-primary mt-4 inline-block cursor-pointer">
                    Choose Image
                  </label>
                )}
              </div>
            </div>

            <button
              onClick={handleInspection}
              disabled={!productId || !inspectorName || !selectedImage || analyzing}
              className="btn-primary w-full text-lg py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {analyzing ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⚙️</span>
                  Analyzing with AI...
                </span>
              ) : (
                'Run AI Quality Inspection'
              )}
            </button>
          </div>

          {/* Inspection Result */}
          {inspectionResult && (
            <div className={`mt-6 p-4 rounded-lg border-2 ${
              inspectionResult.status === 'passed'
                ? 'bg-green-50 border-green-300'
                : 'bg-red-50 border-red-300'
            }`}>
              <h3 className="font-bold text-lg mb-2">
                {inspectionResult.status === 'passed' ? '✓ Inspection Passed' : '✗ Inspection Failed'}
              </h3>
              <p className="text-sm mb-2">
                <strong>Inspection ID:</strong> {inspectionResult.id}
              </p>
              <p className="text-sm mb-2">
                <strong>AI Analysis:</strong> {inspectionResult.aiAnalysis}
              </p>
              {inspectionResult.defectDetails && (
                <p className="text-sm mb-2">
                  <strong>Details:</strong> {inspectionResult.defectDetails}
                </p>
              )}
              <p className="text-xs text-gray-600 mt-3">
                Timestamp: {inspectionResult.timestamp}
              </p>
              <button onClick={resetForm} className="btn-secondary text-sm mt-3">
                New Inspection
              </button>
            </div>
          )}
        </div>

        {/* Inspection History */}
        <div className="card">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Inspection History</h2>

          {inspections.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <div className="text-6xl mb-4">🔍</div>
              <p>No inspections yet</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[700px] overflow-y-auto">
              {inspections.map((inspection) => (
                <div key={inspection.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold">{inspection.productId}</h3>
                      <p className="text-sm text-gray-600">{inspection.inspectorName}</p>
                    </div>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      inspection.status === 'passed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {inspection.status.toUpperCase()}
                    </span>
                  </div>

                  <img
                    src={inspection.imageUrl}
                    alt="Inspected product"
                    className="w-full h-32 object-cover rounded mb-3"
                  />

                  <div className="text-sm text-gray-700 mb-2">
                    <p className="mb-1"><strong>AI Analysis:</strong></p>
                    <p className="text-xs">{inspection.aiAnalysis}</p>
                  </div>

                  <p className="text-xs text-gray-500">
                    {inspection.timestamp}
                  </p>
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
